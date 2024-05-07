import React from "react";
import { Container } from "@/components/mics";
import Link from "next/link";
import Card from "@/components/Card";
import useDocsFolder from "@/hooks/useDocsFolder";
import { formatTitle } from "@/hooks/utils";
const DocTopic = ({
  params,
}: {
  params: {
    topic: string;
  };
}) => {
  const { topic } = params;
  const docs = useDocsFolder();
  const current = docs.find((doc) => doc.category === topic)?.files;
  if (!current) {
    throw new Error("No se ha encontrado el tema solicitado");
  }
  return (
    <div className="my-10">
      <Container>
        <Card.Body>
          <Card.Header
            title={topic}
            hType="h1"
            Side={<p>{current.length}</p>}
          />
          <ul className="grid gap-3">
            {current.map((doc, i) => {
              return (
                <Card.ListItem key={doc.name}>
                  <h2 className="capitalize">{formatTitle(doc.name)}</h2>
                  <Link
                    href={`${topic}/${formatTitle(doc.name, true)}`}
                    className="text-sm text-blue-500 hover:underline hover:font-bold"
                  >
                    Ver más
                  </Link>
                </Card.ListItem>
              );
            })}
          </ul>
        </Card.Body>
      </Container>
    </div>
  );
};

export default DocTopic;
