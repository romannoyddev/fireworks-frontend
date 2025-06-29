import { useEffect, useRef, useState } from 'react';
import VisuallyHidden from '../../styled/visually-hidden/visually-hidden';
import {
  SiteNavigationCloseButton,
  SiteNavigationLink,
  SiteNavigationList,
  SiteNavigationOpenButton,
  SiteNavigationStyled
} from './styles';
import useMediaQuery from '../../../hooks/use-media-query';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SiteNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    if (prevPathRef.current !== location.pathname) {
      setIsMenuOpen(false);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname, isMobile, isMenuOpen]);

  useEffect(() => {
    if (!isMobile || !isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isMenuOpen]);

  return (
    <SiteNavigationStyled ref={navRef}>
      {isMobile &&
        (isMenuOpen ? (
          <SiteNavigationCloseButton onClick={handleToggleMenu}>
            <VisuallyHidden>Menu</VisuallyHidden>
            <X size={32} />
          </SiteNavigationCloseButton>
        ) : (
          <SiteNavigationOpenButton onClick={handleToggleMenu}>
            <VisuallyHidden>Menu</VisuallyHidden>
            <Menu size={32} />
          </SiteNavigationOpenButton>
        ))}
      <SiteNavigationList $isOpen={isMobile ? isMenuOpen : true}>
        <li>
          <SiteNavigationLink to="/">Home</SiteNavigationLink>
        </li>
        <li>
          <SiteNavigationLink to="/catalog">Catalog</SiteNavigationLink>
        </li>
        <li>
          <SiteNavigationLink to="/about">About</SiteNavigationLink>
        </li>
      </SiteNavigationList>
    </SiteNavigationStyled>
  );
};

export default SiteNavigation;
