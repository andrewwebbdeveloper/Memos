import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';

const StyledButton = styled.button`
  padding: 1rem;
  margin: 1rem;
  background-color: #73b66b;
  grid-row: 4;
  grid-column: 2 / span 2;
  color: ${color.white};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700; 
  transition: all ease-in-out 0.3s;
  box-shadow: 0 2px 1px #404040;
  &:hover {
    box-shadow: 0 5px 3px #404040;
    transform: translateY(-0.1rem);
  }
  &:active {
    box-shadow: 0 5px 3px #404040;
    transform: translateY(0.1rem);
    background-color: #86d67d;
  }
`;

const Button = props => {
  const { resetHandler } = props;
  return <StyledButton onClick={() => resetHandler()}>RESTART</StyledButton>;
};

export default Button;
