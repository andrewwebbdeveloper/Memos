import styled from 'styled-components';
import { color } from '../utilities';

export const MainLayout = styled.div`
  background: ${color.black};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(3rem, 1fr) 6fr minmax(3rem, 1fr);
  justify-items: center;
`;

export const PlayerArea = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-items: left;
  align-items: center;
  transition: ease-in-out 0.2s opacity;
  h2 {
    color: ${color.white};
    font-size: 2vmax;
  }
  h1 {
    color: ${color.white};
    font-size: 6vmax;
    justify-content: center;
  }
`;

export const CardArea = styled.div`
  padding: 2rem 0 2rem 0;
  width: 90%;
  height: 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, min-content);
  grid-gap: 3vmax;
`;
