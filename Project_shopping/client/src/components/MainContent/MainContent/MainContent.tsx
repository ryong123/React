import MainSeat from '../../../assets/images/MainSeat.png';
import MainBedding from '../../../assets/images/MainBedding.png';
import MainKeep from '../../../assets/images/MainKeep.png';

import {
  _MainTitle,
  _MarginDiv,
  _MainContentDiv,
  _MainImgDiv,
  _MainContentImg,
} from './MainContent';

export default function MainContent() {
  return (
    <>
      <_MainTitle>I need to possess What I desire</_MainTitle>
      <_MarginDiv></_MarginDiv>
      <_MainContentDiv>
        <_MainImgDiv>
          <_MainContentImg src={MainSeat} alt="MainSeat.png" />
        </_MainImgDiv>
        <_MainImgDiv>
          <_MainContentImg src={MainBedding} alt="MainBedding.png" />
        </_MainImgDiv>
        <_MainImgDiv>
          <_MainContentImg src={MainKeep} alt="MainKeep.png" />
        </_MainImgDiv>
      </_MainContentDiv>
    </>
  );
}
