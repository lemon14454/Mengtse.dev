import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  delay,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className="hover:cursor-pointer border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </motion.a>
    </Link>
  );
}
