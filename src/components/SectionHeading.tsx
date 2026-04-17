import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, description, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
