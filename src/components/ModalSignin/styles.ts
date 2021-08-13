import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.header`
  margin: 0 auto;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  width: 200px;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 1.25rem;
  height: 1.25rem;
`;

export const GithubIcon = styled(AiFillGithub)`
  width: 1.25rem;
  height: 1.25rem;
`;
