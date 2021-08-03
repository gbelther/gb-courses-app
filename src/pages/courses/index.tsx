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
    slug: string;
    title: string;
    excerpt: string;
    price: string;
    categoryId: string;
    image: string;
  }[];

  categories: {
    id: string;
    slug: string;
    name: string;
  }[];
}

export default function Courses({ courses, categories }: ICoursesProps) {
  return (
    <Container>
      <NavWrapper>
        <NavTitle>Filtros</NavTitle>
        <NavBar>
          {categories.map((category) => {
            const { id, name } = category;

            return (
              <NavItem key={id}>
                <InputCheckWrapper>
                  <InputCheck type="checkbox" id={id} />
                  <Label htmlFor={id}>{name}</Label>
                </InputCheckWrapper>
              </NavItem>
            );
          })}
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
    Prismic.predicates.any("document.type", ["course", "category"]),
    {
      fetch: [
        "course.category",
        "course.title",
        "course.image",
        "course.excerpt",
        "course.price",
        "category.name",
      ],
      pageSize: 100,
    }
  );

  const allCategories = response.results.filter(
    (result) => result.type === "category"
  );
  const allCourses = response.results.filter(
    (result) => result.type === "course"
  );

  const categories = allCategories.map((category) => {
    const { id, uid, data } = category;

    return {
      id,
      slug: uid,
      name: data.name[0].text,
    };
  });

  const courses = allCourses.map((course) => {
    const { id, uid, data } = course;

    return {
      id,
      slug: uid,
      title: data.title[0].text,
      excerpt: data.excerpt[0].text,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(data.price),
      categoryId: data.category.id,
      image: data.image.url,
    };
  });

  return {
    props: {
      courses,
      categories,
    },
  };
};
