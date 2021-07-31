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
        <NavItem>Home</NavItem>
        <NavItem>Cursos</NavItem>
        <NavItem>Instrutor</NavItem>
      </NavWrapper>
      <UserLoginWrapper>
        <UserIcon />
        <Username>Gabriel Belther</Username>
      </UserLoginWrapper>
    </Container>
  );
}
