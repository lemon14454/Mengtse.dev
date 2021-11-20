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
  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Link href={`/projects/${slug}`}>
      <motion.a
        variants={variants}
        className="flex flex-col mb-3 hover:cursor-pointer hover:border-green-400 dark:hover:border-green-500 border-2 border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-white bg-purple-500 rounded-lg px-2 font-mono font-semibold text-xs"
            >
              {skill}
            </p>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-left text-green-400 dark:text-green-500">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </motion.a>
    </Link>
  );
}
