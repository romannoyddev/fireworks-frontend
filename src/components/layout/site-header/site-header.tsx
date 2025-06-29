import SectionContainer from '../../styled/section-container/section-container';
import Logo from '../../ui/logo/logo';
import SiteNavigation from '../../ui/site-navigation/site-navigation';
import { SiteHeaderInner, SiteHeaderStyled } from './styles';

const SiteHeader: React.FC = () => {
  return (
    <SiteHeaderStyled>
      <SectionContainer>
        <SiteHeaderInner>
          <Logo />
          <SiteNavigation />
        </SiteHeaderInner>
      </SectionContainer>
    </SiteHeaderStyled>
  );
};

export default SiteHeader;
