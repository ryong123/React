import styled from 'styled-components';
import SectionSeat from '../../assets/images/SectionSeat.png';
import SectionBedding from '../../assets/images/SectionBedding.png';
import SectionKeep from '../../assets/images/SectionKeep.png';

const _SectionContainer = styled.div`
  display: flex;
  margin: 20px 20px 20px;
`;

const _SectionTitleDiv = styled.div``;

const _SectionTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
`;

const _SectionTitleContentDiv = styled.div`
  width: 100%;
`;

const _SectionTitleContent = styled.p`
  text-align: right;
  font-weight: 100;
  line-height: 1.5;
`;

export const _SectionImgContainer = styled.div`
  margin: 0px 20px;
`;

export const _SectionImgDiv = styled.div`
  display: flex;
  position: relative;
`;

export const _SectionImgTitle = styled.strong`
  font-size: 37px;
  font-weight: 700;
`;
export const _SectionImgContent = styled.span`
  display: flex;
  padding-left: 16px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 100;
`;
const _SectionImgLink = styled.a`
  position: absolute;
  bottom: 0;
  font-size: 14px;
  line-height: 1.8;
  font-weight: 400;
`;

export default function SectionContent() {
  return (
    <>
      <_SectionContainer>
        <_SectionTitleDiv>
          <_SectionTitle>Don't hesitate to take what you want</_SectionTitle>
        </_SectionTitleDiv>
        <_SectionTitleContentDiv>
          <_SectionTitleContent>
            Don't hesitate to take what you want I need to possess What I
          </_SectionTitleContent>
          <_SectionTitleContent>
            desire I need to possess what I desire
          </_SectionTitleContent>
        </_SectionTitleContentDiv>
      </_SectionContainer>
      <div style={{ height: '200px' }}></div>
      <_SectionImgContainer>
        <_SectionImgDiv>
          <img src={SectionSeat} alt="" />

          <div>
            <_SectionImgContent>
              <_SectionImgTitle>Seat</_SectionImgTitle>
            </_SectionImgContent>
            <_SectionImgContent>Hard Chairs</_SectionImgContent>
            <_SectionImgContent>Hard Chairs</_SectionImgContent>
            <_SectionImgContent>Hard Chairs</_SectionImgContent>
            <_SectionImgContent>Hard Chairs</_SectionImgContent>
            <_SectionImgContent>
              <_SectionImgLink href="#">to pick</_SectionImgLink>
            </_SectionImgContent>
          </div>
        </_SectionImgDiv>
      </_SectionImgContainer>
    </>
  );
}
