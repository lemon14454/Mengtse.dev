import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
  url,
  slug,
  github,
  delay,
  ...rest
}) {
  const skills: string[] = tech.split(",");

  return (
    <Link href={`/projects/${slug}`}>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className="hover:cursor-pointer hover:border-green-400 dark:hover:border-green-500 border-2 border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <h3 className="text-2xl font-bold text-left text-green-400 dark:text-green-500">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {skills.map((skill) => (
            <p className="text-gray-700 dark:text-gray-400 font-mono font-semibold text-xs">
              #{skill}
            </p>
          ))}
        </div>
      </motion.a>
    </Link>
  );
}
