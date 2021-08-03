import { useRouter } from "next/dist/client/router";

import {
  Container,
  ImageWrapper,
  LegendWrapper,
  Image,
  Legend,
  Button,
} from "./styles";

export default function Home() {
  const router = useRouter();

  function handleRouterCourses() {
    router.push("/courses");
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src="course-homepage.png" alt="" />
      </ImageWrapper>
      <LegendWrapper>
        <Legend>
          Aprofunde-se nas principais <strong>tecnologias</strong> praticadas
          pelo mercado e se destaque nesse meio.
        </Legend>
        <Button onClick={handleRouterCourses}>Conheça os cursos</Button>
      </LegendWrapper>
    </Container>
  );
}
