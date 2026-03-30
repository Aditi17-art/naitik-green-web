import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-dark py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <p className="mt-6 text-primary-foreground/70">
              Have a project in mind? Reach out to us for a free quote and
              consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <Textarea
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <Button type="submit" className="w-full gap-2">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* INFO + MAP */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8">
              {/* CONTACT INFO */}
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "NGES Manufacturing Unit, Village Post Bhuni, Tehsil Sardhana, Meerut, Uttar Pradesh – 250344",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 81716 30988",
                    href: "tel:+918171630988",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "naitikenviroind1619@gmail.com",
                    href: "mailto:naitikenviroind1619@gmail.com",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Mon–Sat: 9:00 AM – 6:00 PM",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <div className="font-medium">{item.label}</div>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* MAP */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="NGES Manufacturing Unit Location"
                  src="https://www.google.com/maps?q=29.1388768,77.561795&z=15&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
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
