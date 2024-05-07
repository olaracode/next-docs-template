import React from "react";
import { Container } from "@/components/mics";
import { MarkDown } from "@/components/mics";
import { Metadata } from "next";
import configs from "@/config";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";
import useDocsFolder from "@/hooks/useDocsFolder";
import { formatTitle } from "@/hooks/utils";
const { cohort } = configs;

export const metadata: Metadata = {
  title: `Documentacion ${cohort.name}`,
  description: "Descripción del archivo de documentación",
};

const DocDescription = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const folderDocs = useDocsFolder();
  // const current = docs.find((doc) => doc.file.replace(".md", "") === slug);
  const current = folderDocs
    .flatMap((doc) => doc.files)
    .find((doc) => doc.name === `${slug}.md`);
  if (!current) {
    throw new Error("No se ha encontrado el documento solicitado");
  }
  const related = folderDocs
    .filter((doc) => doc.category === current.category)
    .flatMap((doc) => doc.files)
    .filter((doc) => doc.name !== current.name);
  return (
    <Container>
      <div className="my-10">
        {related && (
          <div className="flex justify-end mb-3">
            <CustomLink to="#related" content="Ver Relacionados" />
          </div>
        )}
        {current && <MarkDown content={current?.content} />}
        {related && (
          <div className="my-10">
            <Card.Body>
              <Card.Header
                title="Documentos relacionados"
                hType="h2"
                hSize="xl"
                Side={<p>{related.length}</p>}
              />
              <ul className="grid gap-5" id="related">
                {related.map((doc) => (
                  <Card.ListItem key={doc.name}>
                    <h3 className="capitalize">{formatTitle(doc.name)}</h3>
                    <CustomLink
                      content="Ver Más"
                      to={`/docs/${doc.category}/${formatTitle(
                        doc.name,
                        true
                      )}`}
                    />
                  </Card.ListItem>
                ))}
              </ul>
            </Card.Body>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DocDescription;
