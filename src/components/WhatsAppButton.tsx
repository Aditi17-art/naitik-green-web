import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918171630988?text=Hello%2C%20I%20am%20interested%20in%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-200"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
