import {
  CatalogSidebarNavigationLink,
  CatalogSidebarNavigationList,
  CatalogSidebarStyled
} from './styles';

const CatalogSidebar: React.FC = () => {
  return (
    <CatalogSidebarStyled>
      <nav>
        <CatalogSidebarNavigationList>
          <li>
            <CatalogSidebarNavigationLink to="/catalog/all">All</CatalogSidebarNavigationLink>
          </li>
          <li>
            <CatalogSidebarNavigationLink to="/catalog/rocket">Rocket</CatalogSidebarNavigationLink>
          </li>
          <li>
            <CatalogSidebarNavigationLink to="/catalog/fountain">
              Fountain
            </CatalogSidebarNavigationLink>
          </li>
          <li>
            <CatalogSidebarNavigationLink to="/catalog/party-pack">
              Party pack
            </CatalogSidebarNavigationLink>
          </li>
          <li>
            <CatalogSidebarNavigationLink to="/catalog/sparklers">
              Sparklers
            </CatalogSidebarNavigationLink>
          </li>
        </CatalogSidebarNavigationList>
      </nav>
    </CatalogSidebarStyled>
  );
};

export default CatalogSidebar;
