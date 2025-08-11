import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoRequestForm = ({ open, onOpenChange }: DemoRequestFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    serviceInterested: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.businessEmail || !formData.serviceInterested) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://voxwarelabs.app.n8n.cloud/webhook/ed9807bc-aae1-4b23-bd25-8c48795e6855", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessEmail: formData.businessEmail,
          phoneNumber: formData.phoneNumber,
          companyName: formData.companyName,
          serviceInterested: formData.serviceInterested,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Sent!",
          description: "Thanks! Your request has been sent. We'll be in touch within 24 hours.",
        });
        setFormData({
          fullName: "",
          businessEmail: "",
          phoneNumber: "",
          companyName: "",
          serviceInterested: "",
        });
        onOpenChange(false);
      } else {
        throw new Error("Failed to send request");
      }
    } catch (error) {
      console.error("Error sending demo request:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Your Free Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get in touch to schedule your demo.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessEmail">Business Email *</Label>
            <Input
              id="businessEmail"
              type="email"
              value={formData.businessEmail}
              onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceInterested">Service Interested In *</Label>
            <Select
              value={formData.serviceInterested}
              onValueChange={(value) => setFormData({ ...formData, serviceInterested: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Custom Voice Agent">Custom Voice Agent</SelectItem>
                <SelectItem value="Custom Support Package">Custom Support Package</SelectItem>
                <SelectItem value="Custom Chatbot">Custom Chatbot</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending Request..." : "Send Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};