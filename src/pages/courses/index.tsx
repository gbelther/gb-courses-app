import { useEffect, ChangeEvent, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";

import { Client as PrismicClient } from "../../services/prismic";

import { Button } from "../../components/Button";

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
  CoursesList,
  CourseItem,
  ImgCourse,
  CourseWrapper,
  CourseTitle,
  CourseInfos,
  CourseDescription,
  CourseAction,
  CoursePrice,
} from "../../styles/pages/Courses/styles";

interface ICourse {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  price: string;
  categoryId: string;
  image: string;
}

interface ICoursesProps {
  courses: ICourse[];
  categories: {
    id: string;
    slug: string;
    name: string;
  }[];
}

export default function Courses({ courses, categories }: ICoursesProps) {
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>(courses);
  const [idCategoriesAvailable, setIdCategoriesAvailable] = useState(() => {
    return categories.map((category) => category.id);
  });

  const router = useRouter();

  useEffect(() => {
    const coursesAvailable = courses.filter((course) =>
      idCategoriesAvailable.includes(course.categoryId)
    );

    setFilteredCourses(coursesAvailable);
  }, [idCategoriesAvailable]);

  function handleFilterByCategory(event: ChangeEvent<HTMLInputElement>) {
    const id = event.target.value;

    const isActive = idCategoriesAvailable.includes(id);

    if (isActive) {
      setIdCategoriesAvailable((prevState) =>
        prevState.filter((currentId) => currentId !== id)
      );
    } else {
      setIdCategoriesAvailable((prevState) => [...prevState, id]);
    }
  }

  function handleRedirectToCoursePage(slug: string) {
    router.push(`/courses/${slug}`);
  }

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
                  <InputCheck
                    type="checkbox"
                    id={id}
                    value={id}
                    checked={idCategoriesAvailable.includes(id)}
                    onChange={handleFilterByCategory}
                  />
                  <Label htmlFor={id}>{name}</Label>
                </InputCheckWrapper>
              </NavItem>
            );
          })}
        </NavBar>
      </NavWrapper>
      <ContentWrapper>
        <CoursesList>
          {filteredCourses.map((course) => {
            const { id, slug, excerpt, title, price, image } = course;
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
                    <Button onClick={() => handleRedirectToCoursePage(slug)}>
                      DETALHES
                    </Button>
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
  const response = await PrismicClient.query(
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
    revalidate: 30,
  };
};
