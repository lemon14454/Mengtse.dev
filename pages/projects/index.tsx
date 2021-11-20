import { allProjects } from ".contentlayer/data";
import Container from "components/Container";
import ProjectCard from "components/ProjectCard";
import { motion } from "framer-motion";
import { pick } from "lib/utils";
import type { InferGetStaticPropsType } from "next";

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Container title="作品 – 沈孟澤" description="沈孟澤的作品">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          作品
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          我做過許多網頁，我將幾個較具學習價值的作品放在這裡，程式碼及作品網站連結皆在文章中，文章內容主要為個人學習心路歷程及作品概要。
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="w-full my-2 mt-4"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              delay={index * 0.1}
              slug={project.slug}
              title={project.title}
              tech={project.tech}
              url={project.url}
              github={project.github}
              description={project.description}
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const projects = allProjects.map((project) =>
    pick(project, ["slug", "title", "tech", "description", "url", "github"])
  );

  return { props: { projects } };
}
