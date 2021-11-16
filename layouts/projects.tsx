import Container from "components/Container";
import type { PropsWithChildren } from "react";
import type { Project } from ".contentlayer/types";

export default function ProjectLayout({
  children,
  project,
}: PropsWithChildren<{ project: Project }>) {
  return (
    <Container title={`${project.title} - 作品`} description="沈孟澤的作品">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            <div className="mt-2 sm:mt-0 flex gap-2 text-green-500 dark:text-green-400 font-semibold ">
              <a
                href={project.github}
                target="_blank"
                className="hover:text-green-400 dark:hover:text-green-300"
              >
                Github
              </a>
              {" | "}
              <a
                href={project.url}
                target="_blank"
                className="hover:text-green-400 dark:hover:text-green-300"
              >
                作品連結
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </div>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
