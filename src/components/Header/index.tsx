import Link from "next/link";

import {
  Container,
  LogoWrapper,
  NavWrapper,
  UserLoginWrapper,
  LogoIcon,
  LogoTitle,
  NavItem,
  UserIcon,
  Username,
} from "./styles";

export function Header() {
  return (
    <Container>
      <LogoWrapper>
        <LogoIcon />
        <LogoTitle>GB-COURSES</LogoTitle>
      </LogoWrapper>
      <NavWrapper>
        <Link href="/" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/courses" passHref>
          <NavItem>Cursos</NavItem>
        </Link>
        <NavItem>Instrutor</NavItem>
      </NavWrapper>
      <UserLoginWrapper>
        <UserIcon />
        <Username>Gabriel Belther</Username>
      </UserLoginWrapper>
    </Container>
  );
}
