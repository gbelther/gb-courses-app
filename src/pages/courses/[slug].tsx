import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { Client as PrismicClient } from "../../services/prismic";

import { Button } from "../../components/Button";

import {
  Container,
  CourseResume,
  CourseDescription,
  ImgCourse,
  CoursePrice,
  Description,
} from "../../styles/pages/Course/styles";

interface ICourseInfos {
  id: string;
  uid: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface ICourseProps {
  courseInfos: ICourseInfos;
}

export default function Course({ courseInfos }: ICourseProps) {
  return (
    <Container>
      <CourseResume>
        <h2>{courseInfos.title}</h2>
        <ImgCourse src={courseInfos.image} />
        <div>
          <CoursePrice>{courseInfos.price}</CoursePrice>
          <Button>COMPRAR</Button>
        </div>
      </CourseResume>
      <CourseDescription>
        <h1>Conheça o Curso</h1>
        <Description
          dangerouslySetInnerHTML={{ __html: courseInfos.description }}
        />
      </CourseDescription>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const response = await PrismicClient.getByUID("course", String(slug), {});

  const { id, uid, data } = response;

  const courseInfos = {
    id,
    uid,
    title: data.title[0].text,
    description: RichText.asHtml(data.description),
    price: Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(data.price),
    image: data.image.url,
  };

  return {
    props: {
      courseInfos,
    },
  };
};
