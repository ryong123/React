import styled from 'styled-components';

// 헤더 메인 Div
const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
`;

const LogoDiv = styled.div`
  display: flex;
`;

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
`;

const CenterNavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const RightNavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
`;

export default function Header() {
  return (
    <ContainerDiv>
      <HeaderWrapper>
        <LogoDiv>
          <a href="">Pick</a>
        </LogoDiv>
        <Nav>
          <CenterNavList>
            <li>
              <a href="">Main</a>
            </li>
            <li>
              <a href="">Market</a>
            </li>
            <li>
              <a href="">Dutch treat</a>
            </li>
            <li>
              <a href="">Board</a>
            </li>
          </CenterNavList>
          <RightNavList>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </RightNavList>
        </Nav>
      </HeaderWrapper>
    </ContainerDiv>
  );
}
