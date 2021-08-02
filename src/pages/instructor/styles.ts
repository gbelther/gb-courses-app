import styled from "styled-components";

export const Container = styled.main`
  width: ${({ theme }) => theme.breakPoints.xl};
  margin: 0 auto;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const Content = styled.article`
  font-size: 1rem;
  text-align: justify;

  :not(:first-child) {
    margin-bottom: 1rem;
  }
`;
