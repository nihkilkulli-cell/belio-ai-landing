import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { fullName, businessEmail, phoneNumber, companyName, serviceInterest } = await req.json()

    // Email service configuration (you'll need to set these as Supabase secrets)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured')
    }

    // Email content
    const emailBody = `
New demo request received:

Name: ${fullName}
Email: ${businessEmail}
Phone: ${phoneNumber || 'Not provided'}
Company: ${companyName || 'Not provided'}
Service: ${serviceInterest}

Please follow up within 24 hours.
    `.trim()

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Demo Requests <noreply@belio.ai>',
        to: ['abishai@belio.ai'],
        subject: 'New Demo Request',
        text: emailBody,
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      throw new Error(`Failed to send email: ${error}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Demo request sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending demo request:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})