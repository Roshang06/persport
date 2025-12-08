import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-slate-900/30 border border-slate-800 rounded-xl p-4"
    >
      <div className="h-44 w-full rounded-md bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-slate-200 mb-4 overflow-hidden">
        <img src={image} alt={title} className="object-cover h-full w-full" />
      </div>

      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </motion.article>
  );
}
