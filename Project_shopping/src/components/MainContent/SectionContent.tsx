import SectionSeat from '../../assets/images/SectionSeat.png';
import { Sections } from './data';

import {
  _SectionContainer,
  _SectionTitleDiv,
  _SectionTitle,
  _SectionTitleContentDiv,
  _SectionTitleContent,
  _SectionImgContainer,
  _SectionImgDiv,
  _SectionImg,
  _SectionImgContent,
  _SectionImgTitle,
  _SectionImgLink,
  _SectionDiv,
} from './SectionContent.style';

console.log(Sections);
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

      {/* 하단 이미지 */}
      <_SectionImgContainer>
        {Sections.map((section, index) => (
          <_SectionImgDiv key={index}>
            <_SectionImg src={section.imgSrc} alt={section.title} />
            <_SectionDiv>
              <_SectionImgContent>
                <_SectionImgTitle>{section.title}</_SectionImgTitle>
              </_SectionImgContent>

              {section.content.map((item, index) => (
                <_SectionImgContent key={index}>{item}</_SectionImgContent>
              ))}

              <_SectionImgLink href="#">{section.imgLink}</_SectionImgLink>
            </_SectionDiv>
          </_SectionImgDiv>
        ))}
        {/* 
        <_SectionImgDiv>
          <_SectionImg src={SectionSeat} alt="" />
          <_SectionDiv>
            <_SectionImgContent>
              <_SectionImgTitle>Bedding</_SectionImgTitle>
            </_SectionImgContent>
            <_SectionImgContent>Bed</_SectionImgContent>
            <_SectionImgContent>Pillow</_SectionImgContent>
            <_SectionImgContent>Bed lighting</_SectionImgContent>
            <_SectionImgContent>Blanket</_SectionImgContent>

            <_SectionImgLink href="#">to pick</_SectionImgLink>
          </_SectionDiv>
        </_SectionImgDiv>
        <_SectionImgDiv>
          <_SectionImg src={SectionSeat} alt="" />
          <_SectionDiv>
            <_SectionImgContent>
              <_SectionImgTitle>Keep</_SectionImgTitle>
            </_SectionImgContent>
            <_SectionImgContent>Clothing</_SectionImgContent>
            <_SectionImgContent>Shelves</_SectionImgContent>
            <_SectionImgContent>Bookcase</_SectionImgContent>
            <_SectionImgContent>Miscellaneous</_SectionImgContent>

            <_SectionImgLink href="#">to pick</_SectionImgLink>
          </_SectionDiv>
        </_SectionImgDiv> */}
      </_SectionImgContainer>
    </>
  );
}
