import Image from "next/image";
import Container from "components/Container";
// import Skilltree from "components/Skilltree";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                沈孟澤
              </h1>
              <h3 className="text-gray-700 dark:text-gray-200 font-mono font-semibold text-lg">
                Mengtse Shen
              </h3>
            </div>
            <h2 className="text-green-400 dark:text-green-500 mb-4">
              @lemon14454@gmail.com
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              我畢業於高雄科技大學資訊管理系，自大學開始研究網頁技術，目前在做前端開發但也擁有基礎的後端開發經驗。我主要的開發工具為
              React、Redux、Typescript、TailwindCSS 及 Webpack。
            </p>
          </div>
          <div className="w-[80px] sm:w-[240px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Mengtse Shen"
              height={240}
              width={240}
              src="/avatar.jpeg"
              className="rounded-full"
            />
          </div>
        </div>
        {/* <Skilltree /> */}
      </div>
    </Container>
  );
}
