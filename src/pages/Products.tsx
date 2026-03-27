import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Products = () => (
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
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Premium <span className="text-primary">FRP Products</span> for Every Need
          </h1>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Browse our complete range of eco-friendly sanitation and infrastructure products, manufactured with high-grade FRP materials.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container space-y-16">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{p.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              {p.specs && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(p.specs).map(([k, v]) => (
                    <span
                      key={k}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {k}: {v}
                    </span>
                  ))}
                </div>
              )}
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="gap-2">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

export default Products;
