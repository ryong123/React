import { Link } from 'react-router-dom';
import Nav from './Nav';
import { _ContainerDiv, _HeaderWrapper, _LogoDiv } from './styles';

export default function Header() {
  return (
    <_ContainerDiv>
      <_HeaderWrapper>
        <_LogoDiv>
          <Link to="/">Pick</Link>
        </_LogoDiv>
        <Nav></Nav>
      </_HeaderWrapper>
    </_ContainerDiv>
  );
}
