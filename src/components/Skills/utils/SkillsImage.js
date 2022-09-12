import html from "./assets/skills/html.svg";
import css from "./assets/skills/css.svg";
import javascript from "./assets/skills/javascript.svg";
import react from "./assets/skills/react.svg";
import typescript from "./assets/skills/typescript.svg";
import bootstrap from "./assets/skills/bootstrap.svg";
import mongoDB from "./assets/skills/mongoDB.svg";
import mysql from "./assets/skills/mysql.svg";
import c from "./assets/skills/c.svg";
import cplusplus from "./assets/skills/cplusplus.svg";
import csharp from "./assets/skills/csharp.svg";
import php from "./assets/skills/php.svg";
import git from "./assets/skills/git.svg";
import materialui from "./assets/skills/materialui.svg";
import microsoftoffice from "./assets/skills/microsoftoffice.svg";
import node from "./assets/skills/node.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "node":
      return node;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "php":
      return php;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "microsoft office":
      return microsoftoffice;
    default:
      break;
  }
};
