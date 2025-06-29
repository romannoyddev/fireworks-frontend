import { SiteButtonStyled } from './styles';
import type { SiteButtonProps } from './types';

const SiteButton: React.FC<SiteButtonProps> = ({ children, $buttonColor }) => {
  return <SiteButtonStyled $buttonColor={$buttonColor}>{children}</SiteButtonStyled>;
};

export default SiteButton;
