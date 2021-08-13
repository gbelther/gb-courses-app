import styled from "styled-components";

export const Container = styled.main`
  width: 80%;
  max-width: ${({ theme }) => theme.breakPoints.xl};
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: 200px auto;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 90%;
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
  }
`;

export const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  height: fit-content;
  padding: 1rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const NavTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const NavItem = styled.li`
  list-style-type: none;
`;

export const InputCheckWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

export const InputCheck = styled.input``;

export const ContentWrapper = styled.div`
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CoursesList = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CourseItem = styled.li`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgCourse = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;

  align-self: center;
`;

export const CourseWrapper = styled.div`
  padding: 0.5rem 1rem;
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const CourseTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;

export const CourseInfos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const CourseDescription = styled.p`
  font-size: 0.9375rem;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;

export const CourseAction = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CoursePrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.success};
  height: 2rem;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
  }
`;
