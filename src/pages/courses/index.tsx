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

export default function Courses() {
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
          <CourseItem>
            <ImgCourse src="/react-img.png" />
            <CourseWrapper>
              <CourseInfos>
                <CourseTitle>ReactJS do Básico ao Avançado</CourseTitle>
                <CourseDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, in perferendis porro odit officiis ex odio,
                  temporibus dolorem doloribus voluptatem illum repellendus
                  facere modi quam laborum omnis aliquam consequatur neque!
                </CourseDescription>
              </CourseInfos>
              <CourseAction>
                <CoursePrice>R$199,90</CoursePrice>
                <Button>COMPRAR</Button>
              </CourseAction>
            </CourseWrapper>
          </CourseItem>
          <CourseItem>
            <ImgCourse src="/react-img.png" />
            <CourseWrapper>
              <CourseInfos>
                <CourseTitle>ReactJS do Básico ao Avançado</CourseTitle>
                <CourseDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, in perferendis porro odit officiis ex odio,
                  temporibus dolorem doloribus voluptatem illum repellendus
                  facere modi quam laborum omnis aliquam consequatur neque!
                </CourseDescription>
              </CourseInfos>
              <CourseAction>
                <CoursePrice>R$199,90</CoursePrice>
                <Button>COMPRAR</Button>
              </CourseAction>
            </CourseWrapper>
          </CourseItem>
          <CourseItem>
            <ImgCourse src="/react-img.png" />
            <CourseWrapper>
              <CourseInfos>
                <CourseTitle>ReactJS do Básico ao Avançado</CourseTitle>
                <CourseDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, in perferendis porro odit officiis ex odio,
                  temporibus dolorem doloribus voluptatem illum repellendus
                  facere modi quam laborum omnis aliquam consequatur neque!
                </CourseDescription>
              </CourseInfos>
              <CourseAction>
                <CoursePrice>R$199,90</CoursePrice>
                <Button>COMPRAR</Button>
              </CourseAction>
            </CourseWrapper>
          </CourseItem>
        </CoursesList>
      </ContentWrapper>
    </Container>
  );
}
