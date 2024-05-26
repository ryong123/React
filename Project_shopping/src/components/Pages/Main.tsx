import MainSeat from '../../assets/images/MainSeat.png';
import MainBedding from '../../assets/images/MainBedding.png';
import MainKeep from '../../assets/images/MainKeep.png';
import styled from 'styled-components';

const _MainTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin: 0px 20px;
  width: 40%;
`;

const _MarginDiv = styled.div`
  height: 56px;
`;

const _MainContentDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;

const _MainImgDiv = styled.div`
  background-color: #000;
  max-width: 33%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _MainContentImg = styled.img`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function Main() {
  return (
    <div>
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
    </div>
  );
}
