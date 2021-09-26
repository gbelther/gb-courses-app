import styled from "styled-components";

export const CustomButton = styled.button`
  background: ${({ theme }) => theme.colors.success};
  height: 2rem;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;
