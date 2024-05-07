export type DocsT = {
  name: string; // Nombre que se ve en el menu
  file: string; // Nombre del archivo .md
  topic: string; // Nombre de la carpeta donde se encuentra el archivo
  tags: string[]; // Tags para filtrar
  content: string; // Contenido del archivo .md - Inicia vacío y se carga con el hook useDocs
};

const htmlDocs: DocsT[] = [
  {
    name: "Introduccion a html",
    file: "intro-html.md",
    topic: "html",
    content: "",
    tags: ["html"],
  },
  {
    name: "HTML semantico",
    file: "semantic-html.md",
    topic: "html",
    content: "",
    tags: ["html"],
  },
  {
    name: "Mejores practicas html",
    file: "best-practices.md",
    topic: "html",
    content: "",
    tags: ["html"],
  },
];

const cssDocs: DocsT[] = [
  {
    name: "Introducción a css",
    file: "intro-css.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
  {
    name: "Convenciones de nombrado",
    file: "naming-conventions.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
  {
    name: "Selectores",
    file: "selectors.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
  {
    name: "Bootstrap",
    file: "intro-bootstrap.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
];

const jsDocs: DocsT[] = [
  {
    name: "Intro a javascript",
    file: "intro.md",
    topic: "js",
    content: "",
    tags: ["js"],
  },
  {
    name: "Metodos de array(js)",
    file: "array-methods-js.md",
    topic: "js",
    content: "",
    tags: ["js"],
  },
  {
    name: "Eventos javascript",
    file: "events-js.md",
    topic: "js",
    content: "",
    tags: ["js"],
  },
  {
    name: "Fetch Javascript",
    file: "fetch-js.md",
    topic: "js",
    content: "",
    tags: ["js"],
  },
];

const reactDocs: DocsT[] = [
  {
    name: "Metodos de array(React.js)",
    file: "array-methods-react.md",
    topic: "react",
    content: "",
    tags: ["react", "js"],
  },
  {
    name: "React Estados/useState",
    file: "react-state.md",
    topic: "react",
    content: "",
    tags: ["react", "js"],
  },
  {
    name: "React useEffect",
    file: "react-effect.md",
    topic: "react",
    content: "",
    tags: ["react", "js"],
  },
  {
    name: "React Router Dom",
    file: "react-router-dom.md",
    topic: "react",
    content: "",
    tags: ["react", "js"],
  },
  {
    name: "Notación JSX",
    file: "jsx-notation.md",
    topic: "react",
    content: "",
    tags: ["react", "js", "html"],
  },
];

const vsCodeDocs: DocsT[] = [
  {
    name: "Comandos Visual Studio",
    file: "vs-code-shortcuts.md",
    topic: "vs-code",
    content: "",
    tags: ["misc"],
  },
  {
    name: "Extensiones Visual Studio",
    file: "vs-code-extensions.md",
    topic: "vs-code",
    content: "",
    tags: ["misc"],
  },
];

const terminal: DocsT[] = [
  {
    name: "Comandos de terminal",
    file: "terminal.md",
    topic: "terminal",
    content: "",
    tags: ["misc"],
  },
  {
    name: "Comandos de git",
    file: "git.md",
    topic: "terminal",
    content: "",
    tags: ["misc"],
  },
];

const misc: DocsT[] = [
  {
    name: "Convenciones de nombrado",
    file: "naming-conventions.md",
    topic: "misc",
    content: "",
    tags: ["misc"],
  },
];

const docs: DocsT[] = [
  ...htmlDocs,
  ...cssDocs,
  ...vsCodeDocs,
  ...terminal,
  ...jsDocs,
  ...reactDocs,
  ...misc,
];

export default docs;
