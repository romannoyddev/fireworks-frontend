import Img from '../../styled/img/img';
import { LogoStyled, LogoText } from './styles';

const Logo: React.FC = () => {
  return (
    <LogoStyled to="/">
      <Img src="/logo.svg" alt="Логотип" width="64" height="64" />
      <LogoText>Fireworks</LogoText>
    </LogoStyled>
  );
};

export default Logo;
