import styled from 'styled-components';
import Text from '../../styled/text/text';
import { Link } from 'react-router-dom';
import SectionContainer from '../../styled/section-container/section-container';

export const NotFoundSection = styled.section`
  height: 100%;
  display: flex;
`;

export const NotFoundWrapper = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotFoundTitle = styled(Text)`
  text-transform: uppercase;
`;

export const NotFoundLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green};
`;
