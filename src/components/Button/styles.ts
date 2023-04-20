import { BsArrowCounterclockwise, BsHouse, BsPower } from "react-icons/bs";
import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: 0 | 1;
}

export const ButtonAction = styled.button<ButtonProps>`
  ${({ theme, variant }) => variant === 0 && css`
    background-color: ${theme.colors.purple};
    color: ${theme.colors.white};  
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    border: none;
    height: 68px;
    width: 90%;
    cursor: pointer;
    
    &:hover{
      filter: brightness(0.8);
      transition: all 0.2s ease-in-out;
    }
  `}

  ${({ theme, variant }) => variant === 1 && css`
    background-color: transparent;
    border: none;
    color: ${theme.colors.white}; 
    font-size: 20px;
    font-weight: regular;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    flex-direction: column;

    cursor: pointer;
    
    &:hover{
      filter: brightness(0.8);
      transition: all 0.2s ease-in-out;
    }
  `}

`;

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 30px;  
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  `};
`;