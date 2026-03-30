import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Calendar, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    desc: "Naitik Green Enviro Solutions started operations in MEERUT.",
  },
  {
    year: "2021",
    title: "First Major Project",
    desc: "Delivered 50+ FRP toilets for a government sanitation initiative.",
  },
  {
    year: "2022",
    title: "Expanded Product Line",
    desc: "Added mobile toilet vans and bio digester tanks to our offerings.",
  },
  {
    year: "2023",
    title: "Pan-India Presence",
    desc: "Expanded delivery and installation services to 15+ states.",
  },
  {
    year: "2024",
    title: "500+ Projects Milestone",
    desc: "Crossed 500 successful project deliveries across India.",
  },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-gradient-dark py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Building a <span className="text-primary">Greener</span> India
          </h1>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Since 2020, Naitik Green Enviro Solutions has been at the forefront
            of eco-friendly sanitation infrastructure, delivering durable FRP
            products that protect both people and the planet.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Target,
            title: "Our Mission",
            text: "To provide affordable, durable, and eco-friendly sanitation solutions that improve hygiene standards and contribute to Swachh Bharat. We aim to make clean sanitation accessible to every corner of India.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To become India's most trusted manufacturer of sustainable sanitation infrastructure, setting industry benchmarks for quality, innovation, and environmental responsibility.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Founder */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading label="Leadership" title="Meet Our Founder" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Gautam Singh</h3>
            <p className="text-primary font-medium text-sm mb-4">
              Founder & Director
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              With a passion for sustainable development and years of experience
              in the infrastructure sector, Gautam Singh founded Naitik Green
              Enviro Solutions to address India's growing sanitation needs. His
              vision drives the company's commitment to quality, innovation, and
              environmental stewardship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container">
        <SectionHeading
          label="Our Journey"
          title="Growing Stronger Every Year"
        />
        <div className="max-w-2xl mx-auto">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  {t.year.slice(2)}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="text-sm text-primary font-semibold mb-1">
                  {t.year}
                </div>
                <h4 className="font-bold text-foreground mb-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
