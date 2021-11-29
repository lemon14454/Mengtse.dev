import { motion } from "framer-motion";
import {
  HtmlSVG,
  ReactSVG,
  ReduxSVG,
  SassSVG,
  TailwindSVG,
  TypescriptSVG,
  WebpackSVG,
} from "svg";
import NextLink from "next/link";
interface SkillProps {
  name: string;
  logo: JSX.Element;
  description: string;
}

const Skill = ({ name, logo, description }: SkillProps) => {
  const variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      className="flex items-center gap-3 w-full border-b border-gray-200 dark:border-gray-700 p-3"
    >
      <div className="mr-4">{logo}</div>
      <div className="flex justify-between w-full">
        <h4 className="font-medium text-sm md:text-lg text-gray-800 dark:text-gray-100">
          {name}
        </h4>
        <p className="text-gray-300 dark:text-gray-400 text-left text-xs md:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Skilltree = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        技能
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        以下是我所擁有的開發能力，各項技術熟練度皆不同，可以至我的
        <span className="text-purple-500 dark:text-purple-400 font-bold text-lg">
          <NextLink href="/projects">作品</NextLink>
        </span>
        了解更多。
      </p>

      <Skill
        name="Html、Css"
        logo={<HtmlSVG />}
        description="基本網頁切版能力，包含響應式網頁RWD設計"
      />
      <Skill
        name="React"
        logo={<ReactSVG />}
        description="最主要的開發工具，具有串接 API 的經驗"
      />
      <Skill
        name="Redux"
        logo={<ReduxSVG />}
        description="利用 Redux 開發過許多作品包含新版的 RTK"
      />
      <Skill
        name="Tailwind"
        logo={<TailwindSVG />}
        description="目前最熟悉的 CSS 開發方式及理解客製化設定檔"
      />
      <Skill name="Sass" logo={<SassSVG />} description="會使用基本語法" />
      <Skill
        name="Webpack"
        logo={<WebpackSVG />}
        description="仍在學習階段，但有實作過一些作品"
      />
      <Skill
        name="Typescript"
        logo={<TypescriptSVG />}
        description="仍在學習階段，但大部分作品皆用TS來開發"
      />
    </motion.div>
  );
};

export default Skilltree;
