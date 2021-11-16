import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "components/Container";
import type { PropsWithChildren } from "react";
import type { Blog } from ".contentlayer/types";
import { zhTW } from "date-fns/locale";

// const editUrl = (slug) =>
//   `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – 沈孟澤`}
      description={post.summary}
      image={`https://mengtse.dev/${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="沈孟澤"
              height={24}
              width={24}
              src="/avatar.jpeg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"沈孟澤 / "}
              {format(parseISO(post.publishedAt), "MM月dd日, yyyy", {
                locale: zhTW,
              })}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div> */}
      </article>
    </Container>
  );
}
