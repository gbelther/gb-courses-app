import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import {
  Container,
  LogoWrapper,
  NavWrapper,
  UserLoginWrapper,
  LogoIcon,
  LogoTitle,
  NavItem,
  UserIcon,
  Avatar,
  Username,
} from "./styles";

export function Header() {
  const { user, signinGitHub, signinGoogle, signout } = useContext(AuthContext);

  function handleUserLogin() {
    if (user) {
      signout();
    } else {
      // signinGitHub();
      signinGoogle();
    }
  }

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
      <UserLoginWrapper onClick={handleUserLogin}>
        {!!user ? <Avatar src={user?.avatar} /> : <UserIcon />}
        <Username isAuthenticated={!!user}>
          {user?.name ?? "Fazer login"}
        </Username>
      </UserLoginWrapper>
    </Container>
  );
}
