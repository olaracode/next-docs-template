import fs from "fs";
import path from "path";
import { getContent } from "./utils";

export type File = {
  name: string;
  content: string;
  category: string;
};
export type Doc = {
  category: string;
  files: File[];
};
export type DocsFromFolderT = Doc[];

const basePath = "public/docs";
const useDocsFolder = () => {
  const directoryPath = path.join(process.cwd(), basePath);
  const directories = fs.readdirSync(directoryPath);
  const files: DocsFromFolderT = directories.map((directory) => {
    const directoryPath = path.join(process.cwd(), basePath, directory);
    const fileNames = fs.readdirSync(directoryPath);
    return {
      category: directory,
      files: fileNames.map((fileName) => {
        const filePath = path.join(directoryPath, fileName);
        const data = getContent(filePath);
        return {
          name: fileName,
          content: data as string,
          category: directory,
        };
      }),
    };
  });
  return files;
};

export default useDocsFolder;
