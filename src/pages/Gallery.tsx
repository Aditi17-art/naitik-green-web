import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

const allImages = [
  ...products.map((p) => ({ src: p.image, alt: p.name })),
  ...products.map((p) => ({ src: p.image, alt: `${p.name} - Factory View` })),
];

const Gallery = () => (
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
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Our <span className="text-primary">Work</span> in Action
          </h1>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Browse photos of our products, factory, and completed installations across India.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group overflow-hidden rounded-xl shadow-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Gallery;
