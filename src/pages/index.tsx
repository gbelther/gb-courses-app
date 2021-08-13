import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { RichText } from "prismic-dom";

import Prismic from "@prismicio/client";

import { Client as PrismicClient } from "../services/prismic";

import {
  Container,
  ImageWrapper,
  LegendWrapper,
  Image,
  Legend,
  Button,
} from "../styles/pages/Home/styles";

interface IHomeProps {
  homeInfos: {
    phrase: string;
    image: string;
  };
}

export default function Home({ homeInfos }: IHomeProps) {
  const router = useRouter();

  function handleRouterCourses() {
    router.push("/courses");
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={homeInfos.image} />
      </ImageWrapper>
      <LegendWrapper>
        <Legend
          dangerouslySetInnerHTML={{
            __html: homeInfos.phrase,
          }}
        />
        <Button onClick={handleRouterCourses}>Conheça os cursos</Button>
      </LegendWrapper>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await PrismicClient.query(
    Prismic.predicates.at("document.type", "home"),
    {
      fetch: ["home.phrase", "home.image"],
      pageSize: 100,
    }
  );

  const { data } = response.results[0];

  const homeInfos = {
    phrase: RichText.asHtml(data.phrase),
    image: data.image.url,
  };

  return {
    props: {
      homeInfos,
    },
  };
};
