import { DiJqueryLogo,  DiHtml5,DiBootstrap,} from "react-icons/di";
import { SiGit, SiReact, SiCss3 } from "react-icons/si";
import { TbBrandJavascript,TbBrandNextjs } from "react-icons/tb";

export const Skills = [
    {
      slug: "html",
      Component: DiHtml5,
      title: "HTML",
      Description: () => <>Static webpages and portfolio projects</>,
    },
    {
      slug: "css",
      Component: SiCss3,
      title: "CSS",
      Description: () => <>Styling of my webpages</>,
    },
    {
    slug: "jquery",
    Component: DiJqueryLogo,
    title: "jQuery",
    Description: () => <>JavaScript library for simplifying.</>,
  },
  {
    slug: "bootstrap",
    Component: DiBootstrap,
    title: "Bootstrap",
    Description: () => <>Responsive front-end framework.</>,
  },
  {
    slug: "javascript",
    Component: TbBrandJavascript,
    title: "JavaScript",
    Description: () => <>Web development powerhouse language.</>,
  },
  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => <>JavaScript UI library for building.</>,
  },
  
   {
      slug: "Next",
      Component: TbBrandNextjs,
      title: "Next.Js",
      Description: () => <>React-based server-rendered framework.</>,
    },

  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
