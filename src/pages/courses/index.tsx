import { GetStaticProps } from "next";
import { Client } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import {
  Container,
  NavWrapper,
  ContentWrapper,
  NavTitle,
  NavBar,
  NavItem,
  InputCheckWrapper,
  InputCheck,
  Label,
  ContentTitle,
  CoursesList,
  CourseItem,
  ImgCourse,
  CourseWrapper,
  CourseTitle,
  CourseInfos,
  CourseDescription,
  CourseAction,
  CoursePrice,
  Button,
} from "./styles";

interface ICoursesProps {
  courses: {
    id: string;
    title: string;
    excerpt: string;
    price: string;
    image: string;
  }[];
}

export default function Courses({ courses }: ICoursesProps) {
  return (
    <Container>
      <NavWrapper>
        <NavTitle>Filtros</NavTitle>
        <NavBar>
          <NavItem>
            <InputCheckWrapper>
              <InputCheck type="checkbox" id="front-end" />
              <Label htmlFor="front-end">Front-end</Label>
            </InputCheckWrapper>
          </NavItem>
          <NavItem>
            <InputCheckWrapper>
              <InputCheck type="checkbox" id="Back-end" />
              <Label htmlFor="Back-end">Back-end</Label>
            </InputCheckWrapper>
          </NavItem>
          <NavItem>
            <InputCheckWrapper>
              <InputCheck type="checkbox" id="Data-Science" />
              <Label htmlFor="Data-Science">Data Science</Label>
            </InputCheckWrapper>
          </NavItem>
          <NavItem>
            <InputCheckWrapper>
              <InputCheck type="checkbox" id="Machine-Learning" />
              <Label htmlFor="Machine-Learning">Machine Learning</Label>
            </InputCheckWrapper>
          </NavItem>
        </NavBar>
      </NavWrapper>
      <ContentWrapper>
        <CoursesList>
          {courses.map((course) => {
            const { id, excerpt, title, price, image } = course;
            return (
              <CourseItem key={id}>
                <ImgCourse src={image} />
                <CourseWrapper>
                  <CourseInfos>
                    <CourseTitle>{title}</CourseTitle>
                    <CourseDescription>{excerpt}</CourseDescription>
                  </CourseInfos>
                  <CourseAction>
                    <CoursePrice>{price}</CoursePrice>
                    <Button>DETALHES</Button>
                  </CourseAction>
                </CourseWrapper>
              </CourseItem>
            );
          })}
        </CoursesList>
      </ContentWrapper>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = Client;

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "course")],
    {
      fetch: ["course.title", "course.image", "course.excerpt", "course.price"],
      pageSize: 100,
    }
  );

  const courses = response.results.map((course) => {
    const { id, data } = course;

    return {
      id,
      title: data.title[0].text,
      excerpt: data.excerpt[0].text,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(data.price),
      image: data.image.url,
    };
  });

  return {
    props: {
      courses,
    },
  };
};
