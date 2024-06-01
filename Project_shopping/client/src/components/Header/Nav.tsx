import { _NavList, _RightNavList, _CenterNavList } from './styles';
import Li from './NavItem';

export default function Nav() {
  return (
    <_NavList>
      <_CenterNavList>
        <Li to="/">Main</Li>
        <Li to="/market">Market</Li>
        <Li to="/Dutch-treat">Dutch treat</Li>
        <Li to="/board">Board</Li>
      </_CenterNavList>
      <_RightNavList>
        <Li to="/login">Login</Li>
        <Li to="/cart">Cart</Li>
        <Li to="/search">Search</Li>
      </_RightNavList>
    </_NavList>
  );
}
