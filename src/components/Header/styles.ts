import styled from "styled-components";

import { GiWolfHowl } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

export const Container = styled.header`
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Logo
export const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled(GiWolfHowl)`
  height: 2rem;
  width: 2rem;
`;

export const LogoTitle = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
`;

// Navigation
export const NavWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  text-decoration: none;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Login Info
export const UserLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const UserIcon = styled(HiUserCircle)`
  height: 2rem;
  width: 2rem;
`;

export const Username = styled.p`
  font-size: 0.9375rem;
  font-weight: bold;
`;
