import React from "react";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";
import useDocsFolder from "@/hooks/useDocsFolder";
import { formatTitle } from "@/hooks/utils";
const OwnedDocs = () => {
  const docsFromFolder = useDocsFolder();
  const flattenedDocs = docsFromFolder.flatMap((doc) => doc.files);
  return (
    <Card.Body>
      <Card.Header
        title="Documentación Interna"
        hType="h2"
        Side={<CustomLink to="/docs" content="Ver Todos" />}
      />
      <ul className="grid gap-2">
        {flattenedDocs.splice(0, 4).map((doc) => {
          return (
            <Card.ListItem key={doc.name}>
              <h3 className="text-lg capitalize">{formatTitle(doc.name)}</h3>
              <CustomLink
                to={`/docs/${doc.category}/${formatTitle(doc.name, true)}`}
                content="Leer"
              />
            </Card.ListItem>
          );
        })}
      </ul>
    </Card.Body>
  );
};

export default OwnedDocs;
