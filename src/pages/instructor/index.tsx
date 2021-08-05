import { GetStaticPaths, GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import { Client as PrismicClient } from "../../services/prismic";

import {
  Container,
  Title,
  Image,
  Content,
} from "../../styles/pages/Instructor/styles";

interface IInstructorProps {
  instructorInfos: {
    id: string;
    slug: string;
    name: string;
    image: string;
    content: string;
  };
}

export default function Instructor({ instructorInfos }: IInstructorProps) {
  return (
    <Container>
      <Title>{instructorInfos.name}</Title>
      <Image src={instructorInfos.image} />
      <Content
        dangerouslySetInnerHTML={{
          __html: instructorInfos.content,
        }}
      />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await PrismicClient.query(
    Prismic.predicates.at("document.type", "instructor"),
    {
      fetch: ["instructor.name", "instructor.image", "instructor.content"],
      pageSize: 100,
    }
  );

  const { id, uid, data } = response.results[0];

  const instructorInfos = {
    id,
    slug: uid,
    name: RichText.asText(data.name),
    image: data.image.url,
    content: RichText.asHtml(data.content),
  };

  return {
    props: {
      instructorInfos,
    },
  };
};
