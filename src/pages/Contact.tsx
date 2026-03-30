import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section className="bg-gradient-dark py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Have a project in mind? Reach out to us for a free quote and consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" className="gap-2 w-full sm:w-auto">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "House No: 108, near CNG Pump, Chopla, Bhuni Meerut – 250344" },
                  { icon: Phone, label: "Phone", value: "+91 81716 30988, +91 92059 19411", href: "tel:+918171630988" },
                  { icon: Mail, label: "Email", value: "naitikenviroind1619@gmail.com", href: "mailto:naitikenviroind1619@gmail.com" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  title="Naitik Green Enviro Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.07145037254!2d77.41486899999999!3d28.474388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055c6a5ef%3A0x3dacaf8a7c7a39f4!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
