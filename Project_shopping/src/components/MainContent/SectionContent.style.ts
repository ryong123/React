import styled from 'styled-components';

export const _SectionContainer = styled.div`
  display: flex;
  margin: 20px 20px 20px;
`;

export const _SectionTitleDiv = styled.div``;

export const _SectionTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
`;

export const _SectionTitleContentDiv = styled.div`
  width: 100%;
`;

export const _SectionTitleContent = styled.p`
  text-align: right;
  font-weight: 100;
  line-height: 1.5;
`;

export const _SectionImgContainer = styled.div`
  display: flex;
  margin: 0 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 1px solid #000;
`;

export const _SectionImgDiv = styled.div`
  margin: 20px 0px;
`;

export const _SectionImg = styled.img`
  width: 100%;
  height: auto;
`;

export const _SectionDiv = styled.div`
  text-align: center;
`;

export const _SectionImgTitle = styled.strong`
  font-size: 37px;
  font-weight: 700;
`;

export const _SectionImgContent = styled.span`
  display: block;

  font-size: 14px;
  line-height: 1.8;
`;

export const _SectionImgLink = styled.a`
  display: block;
  margin-top: 50px;

  &:hover {
    text-decoration: underline;
  }
`;
