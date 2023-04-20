import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  position: sticky;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
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