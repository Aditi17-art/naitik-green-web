import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Recycle,
  Truck,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "States Covered" },
  { value: "5+", label: "Years Experience" },
];

const services = [
  {
    icon: Shield,
    title: "Durable Products",
    desc: "FRP construction built to last in harsh conditions.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    desc: "Sustainable solutions reducing environmental impact.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Timely delivery and installation across India.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Rigorous quality checks on every product.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Manager, Delhi",
    text: "Naitik Green delivered 20 portable toilets for our highway project on time. Excellent build quality and great after-sales support.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Event Coordinator, Lucknow",
    text: "We hired their mobile toilet van for a large outdoor wedding. The units were spotless and well-maintained. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Municipal Officer, Noida",
    text: "The bio digester tanks installed in our community have been working flawlessly for over two years. Zero complaints from residents.",
    rating: 4,
  },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Eco-friendly sanitation solutions"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm border border-primary-foreground/20">
            FRP Toilet Manufacturer in India
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
            Eco-Friendly Sanitation Solutions for a{" "}
            <span className="text-primary">Cleaner Tomorrow</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
            Naitik Green Enviro Solutions manufactures durable FRP portable
            toilets, mobile toilet vans, bio digester tanks, and more —
            delivering sustainable sanitation across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products">
              <Button size="lg" className="gap-2">
                View Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-gradient-primary py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="text-center text-primary-foreground">
            <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
            <div className="text-sm mt-1 text-primary-foreground/70">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="Built for Quality & Sustainability"
          description="We combine durable materials, innovative engineering, and eco-conscious design to deliver India's best sanitation solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-20">
      <div className="container">
        <SectionHeading
          label="Our Products"
          title="Premium FRP Sanitation Products"
          description="From portable toilets to bio digester tanks, explore our range of eco-friendly, made-in-India solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {p.description}
                </p>
                <Link to="/products">
                  <Button variant="outline" size="sm" className="gap-2">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="outline" size="lg" className="gap-2">
              View All Products <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* About Snippet */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionHeading
              label="About Us"
              title="Naitik Green Enviro Solutions"
              center={false}
            />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Established in 2020 in Meerut, Uttar Pradesh, Naitik Green Enviro
              Solutions has quickly become a trusted name in eco-friendly
              sanitation infrastructure. Founded by Gautam Singh, our company
              manufactures and supplies high-quality FRP products to clients
              across India.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "ISO-standard manufacturing processes",
                "Pan-India delivery & installation",
                "Custom solutions for every requirement",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "10–50 Employees" },
              { icon: Target, label: "500+ Projects" },
              { icon: Zap, label: "Fast Delivery" },
              { icon: Award, label: "Quality First" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-6 text-center shadow-card">
                <item.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                <div className="text-sm font-medium text-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Trusted by construction companies, event organizers, municipalities, and more across India."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-card rounded-xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${
                      j < t.rating ? "text-primary fill-primary" : "text-border"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-dark">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Get a free quote for your sanitation requirements. We deliver across
            India with installation support.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Index;
