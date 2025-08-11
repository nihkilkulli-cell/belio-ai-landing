import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  serviceInterest: string;
}

const DemoRequestForm = ({ isOpen, onClose }: DemoRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    serviceInterest: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.businessEmail || !formData.serviceInterest) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      toast({
        title: "Success!",
        description: "Thanks! Your request has been sent. We'll be in touch within 24 hours."
      });

      // Reset form and close
      setFormData({
        fullName: "",
        businessEmail: "",
        phoneNumber: "",
        companyName: "",
        serviceInterest: ""
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Request Your Free Demo</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll get in touch to schedule your demo.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessEmail">Business Email *</Label>
            <Input
              id="businessEmail"
              type="email"
              value={formData.businessEmail}
              onChange={(e) => handleInputChange("businessEmail", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceInterest">Service Interested In *</Label>
            <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)}>
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

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="cta"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestForm;