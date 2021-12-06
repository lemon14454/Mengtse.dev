import { motion } from "framer-motion";
import {
  HtmlSVG,
  ReactSVG,
  ReduxSVG,
  SassSVG,
  TailwindSVG,
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      className="col-span-1 flex min-h-[80px] p-1 items-center justify-start"
    >
      <div className="p-1 bg-white z-10 border-2 border-white rounded-[50%] transition-all shadow w-[46px] h-[46px] flex items-center justify-center">
        {logo}
      </div>

      <div>
        <h4 className="ml-3 font-medium text-sm md:text-lg text-gray-800 dark:text-gray-100">
          {name}
        </h4>
        <p className="ml-3 text-gray-300 dark:text-gray-400 text-left text-xs md:text-sm">
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-black dark:text-white mb-2 mt-5 relative">
        技能
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
        以下是我所擁有的開發能力，各項技術熟練度皆不同，可以至我的
        <span className="text-purple-500 dark:text-purple-400 font-bold text-lg">
          <NextLink href="/projects">作品</NextLink>
        </span>
        了解更多。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-20 relative">
        <Skill
          name="Html、Css"
          logo={<HtmlSVG />}
          description="基本網頁切版能力，包含響應式網頁RWD設計"
        />
        <Skill
          name="React"
          logo={<ReactSVG />}
          description="最主要的開發工具，具有串接 API 的經驗及各式相關套件"
        />
        <Skill
          name="Redux"
          logo={<ReduxSVG />}
          description="利用 Redux 開發過許多作品包含新版的 Redux Tool Kit"
        />
        <Skill
          name="Tailwind"
          logo={<TailwindSVG />}
          description="目前最熟悉的 CSS 開發方式及理解如何客製化設定"
        />
        <Skill
          name="Sass"
          logo={<SassSVG />}
          description="會使用基本語法及用其製作響應式網頁"
        />
        <Skill
          name="Webpack"
          logo={<WebpackSVG />}
          description="仍在學習階段，但有實作過一些作品"
        />
      </div>
    </motion.div>
  );
};

export default Skilltree;
