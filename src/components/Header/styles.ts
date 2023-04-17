import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const ContentLogo = styled.button`
  background: none;
  border: none;
  text-align: left;
  color: white;

  &:hover{
    filter: brightness(0.8);
    transition: all 0.2 ease-in-out;
  }
`;