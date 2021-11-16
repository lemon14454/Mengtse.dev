import { allSnippets } from ".contentlayer/data";
import Container from "components/Container";
import FunctionCard from "components/FunctionCard";
import { pick } from "lib/utils";
import type { InferGetStaticPropsType } from "next";

export default function Snippets({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="程式 – 沈孟澤"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          常用程式碼
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          這裡是一些我常用或是覺得不錯的程式碼，為加速今後開發速度，我將它們收集起來。
          其中可能也包括某些套件的設定檔或是專案的初始化程序。內容皆為個人使用習慣，套件版本可能不同，請盡量不要直接使用。
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet, index) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              delay={index * 0.1}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ["slug", "title", "logo", "description"])
  );

  return { props: { snippets } };
}
