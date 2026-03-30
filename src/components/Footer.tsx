import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="mb-4 inline-block">
            <img src={logo} alt="Naitik Green Enviro Solutions" className="h-12 w-auto" />
          </Link>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Leading manufacturer & supplier of eco-friendly FRP sanitation products across India since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {["Home", "About", "Products", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {["FRP Portable Toilets", "Mobile Toilet Vans", "Bio Digester Tanks", "Portable Cabins", "Public Toilets"].map((p) => (
              <li key={p}>
                <Link to="/products" className="hover:text-primary transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              Greater Noida, Uttar Pradesh, India
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+918171630988" className="hover:text-primary transition-colors">+91 81716 30988</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919205919411" className="hover:text-primary transition-colors">+91 92059 19411</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:naitikenviroind1619@gmail.com" className="hover:text-primary transition-colors">naitikenviroind1619@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/50 space-y-1">
        <p>© {new Date().getFullYear()} Naitik Green Enviro Solutions. All rights reserved.</p>
        <p>Designed & Developed by <span className="text-primary font-medium">Aditi Dhariwal</span></p>
      </div>
    </div>
  </footer>
);

export default Footer;
