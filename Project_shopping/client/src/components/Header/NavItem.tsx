import { Link } from 'react-router-dom';
import { _Li } from './styles';

interface litype {
  to: string;
  children: string;
}

export default function Li({ to, children }: litype) {
  return (
    <_Li>
      <Link to={to}>{children}</Link>
    </_Li>
  );
}
