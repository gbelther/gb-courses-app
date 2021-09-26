import styled from "styled-components";

export const Container = styled.main`
  padding: 20px 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CourseResume = styled.section`
  width: 30%;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  h2 {
    max-width: 200px;
    text-align: center;
  }
`;

export const ImgCourse = styled.img`
  width: 200px;
  height: auto;
  border-radius: 20px;
`;

export const CoursePrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const CourseDescription = styled.section`
  width: 70%;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.article`
  font-size: 1rem;
  text-align: justify;

  p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
