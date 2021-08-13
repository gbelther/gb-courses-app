import Link from "next/link";
import { useState, useContext } from "react";

import { ModalSignin } from "../ModalSignin";

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
import { useEffect } from "react";

export function Header() {
  const [showModalSignin, setShowModalSignin] = useState(false);

  const { user, signout } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setShowModalSignin(false);
    }
  }, [user]);

  function handleUserLogin() {
    if (user) {
      signout();
    } else {
      setShowModalSignin(true);
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
      {showModalSignin && (
        <ModalSignin
          isOpen={showModalSignin}
          onClose={() => setShowModalSignin(false)}
        />
      )}
    </Container>
  );
}
