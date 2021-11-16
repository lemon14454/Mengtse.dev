import Link from "next/link";

import Container from "components/Container";

export default function NotFound() {
  return (
    <Container title="404 – 沈孟澤">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          e04 - 這裡什麼也沒有！
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          打錯字的不是我而是你，請檢查你的網址，你很有可能是按到不小心鍵盤了。
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            回到首頁
          </a>
        </Link>
      </div>
    </Container>
  );
}
