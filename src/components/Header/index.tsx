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
      <Link href="/" passHref>
        <LogoWrapper>
          <LogoIcon />
          <LogoTitle>GB-COURSES</LogoTitle>
        </LogoWrapper>
      </Link>
      <NavWrapper>
        <Link href="/" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/courses" passHref>
          <NavItem>Cursos</NavItem>
        </Link>
        <Link href="/instructor" passHref>
          <NavItem>Instrutor</NavItem>
        </Link>
      </NavWrapper>
      <UserLoginWrapper>
        <UserIcon />
        <Username>Gabriel Belther</Username>
      </UserLoginWrapper>
    </Container>
  );
}
