import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoints.xl};
  height: calc(100vh - 3rem);
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.section`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const LegendWrapper = styled.section`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Legend = styled.p`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.warning};
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: 4px;
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.colors.warningText};
  font-size: 1.125rem;
  font-weight: bold;
`;
