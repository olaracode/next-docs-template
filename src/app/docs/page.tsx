import React from "react";
import { Container } from "@/components/mics";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";
import useDocsFolder from "@/hooks/useDocsFolder";
import { formatTitle } from "@/hooks/utils";
const Docs = () => {
  const docs = useDocsFolder();
  return (
    <>
      <Container>
        <div className="my-10">
          <h1 className="text-2xl font-bold my-5">Documentación</h1>
          <ul className="grid gap-10">
            {docs.map((topic) => {
              return (
                <li key={`${topic.category}-tema`} id={topic.category}>
                  <Card.Body>
                    <Card.Header
                      title={`${topic.category}(${topic.files.length})`}
                      hType="h2"
                      Side={
                        <CustomLink
                          to={`/docs/${topic.category}`}
                          content="Ver Todos"
                        />
                      }
                    />
                    <ul className="grid gap-3 mt-3">
                      {topic.files.slice(0, 3).map((doc) => {
                        return (
                          <Card.ListItem key={doc.name}>
                            <h3 className="font-bold capitalize">
                              {formatTitle(doc.name)}
                            </h3>
                            <CustomLink
                              to={`/docs/${topic.category}/${formatTitle(doc.name, true)}`}
                              content="Ver más"
                            />
                          </Card.ListItem>
                        );
                      })}
                    </ul>
                  </Card.Body>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Docs;
