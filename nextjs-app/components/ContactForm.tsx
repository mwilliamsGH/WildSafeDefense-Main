"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  title: string;
  description?: string;
  expectations?: string[];
  submitText?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({
  title,
  description,
  expectations,
  submitText = "Submit",
  onSubmit
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
      )}

      {expectations && expectations.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">You'll receive:</p>
          <ul className="space-y-2">
            {expectations.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-base">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 h-12 border-input focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-base">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 h-12 border-input focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-base">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 h-12 border-input focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-base">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 border-input focus:border-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full min-h-12"
        >
          {submitText}
        </Button>
      </form>
    </div>
  );
}
