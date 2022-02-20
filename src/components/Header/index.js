import { Container } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
}
