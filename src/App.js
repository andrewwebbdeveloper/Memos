import React, { useState, useEffect } from 'react';
import { color } from './utilities';
import { shuffle } from './functions';

import { MainLayout, PlayerArea, CardArea } from './layouts/Main';
import Modal from './layouts/Modal';
import Button from './layouts/Button';
import Card from './cards/Card';
import { Deck } from './cards/Deck';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isFlipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [winner, setWinner] = useState(false);

  // If true, player one. If false, player two.
  const [player, setPlayer] = useState(true);

  //Runs when App is mounted
  useEffect(() => {
    setCards(shuffle(Deck));
  }, []);

  const resetGame = () => {
    setCards([]);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setFirstPlayerScore(0);
    setSecondPlayerScore(0);
    setPlayer(true);
    setWinner(false);
    setCards(shuffle(Deck));
  };

  const sameCardClickedTwice = id => isFlipped.includes(id);

  const isAMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => isFlipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };
  const checkEndOfGame = () => {
    const totalScore = firstPlayerScore + secondPlayerScore;
    if (totalScore >= 5) {
      // Win Condition
      setWinner(true);
      // console.log(`end of game`);
    }
  };
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const switchPlayer = () => {
    setPlayer(!player);
  };

  const scorePlayer = () => {
    if (player) {
      setFirstPlayerScore(firstPlayerScore + 1);
    } else if (!player) {
      setSecondPlayerScore(secondPlayerScore + 1);
    }
    checkEndOfGame();
  };

  const resetHandler = () => {
    // console.log('reset');
    resetGame();
  };
  const cardHandler = id => {
    setDisabled(true);
    if (isFlipped.length === 0) {
      setFlipped(isFlipped => [...isFlipped, id]);
      //If none selected, flip card
      setDisabled(false);
    } else if (sameCardClickedTwice(id)) {
      //If same Card flip back and switch players
      isFlipped.pop(id);
      setTimeout(resetCards, 1000);
    } else if (isFlipped.length <= 1) {
      // Allows for second card; but no more than 2
      setFlipped(isFlipped => [...isFlipped, id]);
      setDisabled(false);
      if (isAMatch(id)) {
        //Checks for match then handles resets and scoring
        setSolved([...solved, ...isFlipped, id]);
        resetCards();
        scorePlayer();
      } else {
        // Allows a second to remember cards and then un-flips
        setTimeout(resetCards, 1000);
        switchPlayer();
      }
    }
  };

  return (
    <MainLayout>
      {winner ? (
        <Modal
          firstPlayerScore={firstPlayerScore}
          secondPlayerScore={secondPlayerScore}
          resetHandler={() => resetHandler()}
        />
      ) : (
        <></>
      )}
      {/* <Modal resetHandler={() => resetHandler()} /> */}
      <PlayerArea
        style={{
          background: `${color.red}`,
          opacity: `${player ? '1' : '0.15'}`
        }}
      >
        <h2>PLAYER 1</h2>
        <h1>{firstPlayerScore}</h1>
      </PlayerArea>
      <CardArea style={{ background: `${color.black}` }}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            isFlipped={solved.includes(card.id) || isFlipped.includes(card.id)}
            solved={solved.includes(card.id)}
            disabled={disabled || solved.includes(card.id)}
            cardHandler={() => cardHandler(card.id)}
            cardColor={card.cardColor}
          />
        ))}
        <Button resetHandler={() => resetHandler()} />
      </CardArea>
      <PlayerArea
        style={{
          background: `${color.blue}`,
          opacity: `${player ? '0.15' : '1'}`
        }}
      >
        <h2>PLAYER 2</h2>
        <h1>{secondPlayerScore}</h1>
      </PlayerArea>
    </MainLayout>
  );
};

export default App;
