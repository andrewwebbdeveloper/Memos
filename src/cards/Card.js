import React from 'react';
import Background from '../images/leaves.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { color } from '../utilities';

const Card = props => {
  const { id, isFlipped, disabled, cardHandler, cardColor } = props;

  return (
    <div onClick={() => (disabled ? null : cardHandler(id))} style={{}}>
      <Flippy
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipOnClick={false}
        style={{ width: '20vmin', height: '20vmin' }}
      >
        <FrontSide
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${
              color.white
            }66, ${color.black}8C ), url(${Background})`,
            border: `solid 0.2rem ${color.white}`,
            borderRadius: '0.5rem'
          }}
        />
        <BackSide
          style={{
            backgroundColor: cardColor,
            borderColor: `${color.white}`,
            border: `solid 0.3rem ${color.white}`,
            borderRadius: '0.5rem'
          }}
        />
      </Flippy>
    </div>
  );
};

export default Card;
