import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  index?: number;
}

export default function CompanyLogo({ name, index = 0 }: CompanyLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex items-center justify-center p-6 bg-card rounded-md hover-elevate transition-all duration-300"
    >
      <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
