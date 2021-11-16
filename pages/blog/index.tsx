import Container from "components/Container";
import BlogPost from "components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { pick } from "lib/utils";
import { allBlogs } from ".contentlayer/data";
import { useState } from "react";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 搜尋欄
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="文章 – 沈孟澤"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          文章
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`這裡是我紀錄學習筆記的地方，文章內容並非教學僅供參考，主要為個人使用，若有想看的文章可以透過下方搜尋欄尋找，目前共有 ${posts.length} 篇文章。`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="搜尋文章"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="透過關鍵字"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          全部文章
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">沒有相關文章.</p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt"])
  );

  return { props: { posts } };
}
