import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import components from "components/MDXComponents";
import ProjectLayout from "layouts/projects";
import { allProjects } from ".contentlayer/data";
import type { Project } from ".contentlayer/types";

export default function ProjectPage(project: Project) {
  const Component = useMemo(
    () => getMDXComponent(project.body.code),
    [project.body.code]
  );

  return (
    <ProjectLayout project={project}>
      <Component components={components as any} />
    </ProjectLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allProjects.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: project };
}
