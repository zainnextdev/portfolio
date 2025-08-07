// src/data/skills.ts
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaPaintBrush, FaNodeJs, FaPython, FaGitAlt, FaRegObjectGroup  } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiStyledcomponents, 
  SiPostgresql, 
  SiSupabase, 
  SiCplusplus, 
  SiSharp,
  SiJavascript,
  SiGimp // Corrected GIMP import
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbSeo, TbSocial, TbPhoto  } from 'react-icons/tb';

export interface Skill {
  name: string;
  Icon: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", Icon: SiCplusplus },
      { name: "C#", Icon: SiSharp },
      { name: "Python", Icon: FaPython },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
      { name: "Sass/SCSS", Icon: FaSass },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: FaReact },
      { name: "Styled-Components", Icon: SiStyledcomponents },
      { name: "Ant Design", Icon: FaPaintBrush },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Supabase", Icon: SiSupabase },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Marketing & Design",
    skills: [
      { name: "SEO", Icon: TbSeo },
      { name: "Digital Marketing", Icon: TbSocial },
      { name: "Logo Design", Icon: FaRegObjectGroup },
      { name: "Posters/Banners", Icon: TbPhoto },
      { name: "GIMP", Icon: SiGimp }, // Corrected component and source
    ],
  },
   {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", Icon: FaGitAlt },
      { name: "VS Code", Icon: VscVscode }, // Corrected component and source
    ],
  },
];