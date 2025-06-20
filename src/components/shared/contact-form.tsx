"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, MapPin, SendHorizonal } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted to-background border-t border-border"
    >
      {/* Background glow blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 blur-2xl rounded-full -z-10 animate-pulse-slower" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let’s Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-md">
            Interested in working with Devnixa or have any questions? Fill out
            the form and we’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-3 text-muted-foreground text-base">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>
                <span className="font-medium text-foreground">Email:</span>{" "}
                contact@devnixa.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>
                <span className="font-medium text-foreground">Office:</span>{" "}
                Remote / Islamabad
              </span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-card rounded-3xl shadow-xl border border-border p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-background focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-background focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="bg-background focus-visible:ring-2 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              className="w-full md:w-auto flex items-center gap-2 hover:scale-[1.03] transition-transform duration-300"
            >
              <SendHorizonal className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
