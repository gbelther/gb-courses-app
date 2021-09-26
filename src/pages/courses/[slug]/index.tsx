import {
  Container,
  CourseResume,
  CourseDescription,
  ImgCourse,
  CoursePrice,
  BuyButton,
  Description,
} from "../../../styles/pages/Course/styles";

export default function Course() {
  return (
    <Container>
      <CourseResume>
        <h2>React do Básico ao Avançado</h2>
        <ImgCourse src="/react-img.png" />
        <CoursePrice>R$199,90</CoursePrice>
        <BuyButton>COMPRAR</BuyButton>
      </CourseResume>
      <CourseDescription>
        <h1>Conheça o Curso</h1>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          magni similique laboriosam et commodi minus facilis doloremque! Soluta
          obcaecati accusamus esse culpa! Sunt placeat doloribus possimus
          corrupti nobis quibusdam. Autem.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi magni similique laboriosam et commodi minus
          facilis doloremque! Soluta obcaecati accusamus esse culpa! Sunt
          placeat doloribus possimus corrupti nobis quibusdam. Autem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eligendi magni similique
          laboriosam et commodi minus facilis doloremque! Soluta obcaecati
          accusamus esse culpa! Sunt placeat doloribus possimus corrupti nobis
          quibusdam. Autem.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi magni similique laboriosam et commodi minus facilis
          doloremque! Soluta obcaecati accusamus esse culpa! Sunt placeat
          doloribus possimus corrupti nobis quibusdam. Autem.Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eligendi magni similique
          laboriosam et commodi minus facilis doloremque! Soluta obcaecati
          accusamus esse culpa! Sunt placeat doloribus possimus corrupti nobis
          quibusdam. Autem.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi magni similique laboriosam et commodi minus facilis
          doloremque! Soluta obcaecati accusamus esse culpa! Sunt placeat
          doloribus possimus corrupti nobis quibusdam. Autem.
        </Description>
      </CourseDescription>
    </Container>
  );
}
