import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../utilities';
import Button from './Button';

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;

const ModalStyle = styled.div`
  background: ${color.white};
  border-radius: 1rem;
  width: 30rem;
  height: 18rem;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 20;
  h1 {
    padding: 1rem;
  }
`;

const Modal = props => {
  const [winnerMessage, setWinnerMessage] = useState('');
  const { resetHandler, firstPlayerScore, secondPlayerScore } = props;
  const firstPlayerWon = firstPlayerScore > secondPlayerScore;
  const tieGame = firstPlayerScore === secondPlayerScore;
  useEffect(() => {
    if (tieGame) {
      setWinnerMessage(`It's a Tie!`);
    } else if (firstPlayerWon) {
      setWinnerMessage(`Player 1 Wins with ${firstPlayerScore} Points!`);
    } else {
      setWinnerMessage(`Player 2 Wins with ${secondPlayerScore} Points!`);
    }
  }, '');

  return (
    <ModalContainer>
      <ModalStyle>
        <h1>{winnerMessage}</h1>

        <Button resetHandler={() => resetHandler()} />
      </ModalStyle>
    </ModalContainer>
  );
};

export default Modal;
