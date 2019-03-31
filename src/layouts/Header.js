import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';

const HeaderStyle = styled.div`
  background: ${color.black};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const LogoStyle = styled.h1`
  color: ${color.white};
`;

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>LOGO HEADER</LogoStyle>
    </HeaderStyle>
  );
};

export default Header;
