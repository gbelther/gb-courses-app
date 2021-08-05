import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

import {
  Container,
  ImageWrapper,
  LegendWrapper,
  Image,
  Legend,
  Button,
} from "../styles/pages/Home/styles";

export default function Home() {
  const router = useRouter();

  const { user, signin } = useAuth();

  console.log(user);

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
        <Button onClick={() => signin()}>Login</Button>
      </LegendWrapper>
    </Container>
  );
}
