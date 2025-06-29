import styled from 'styled-components';

export const SiteHeaderStyled = styled.header`
  position: relative;
  padding: 10px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  min-width: 320px;
`;

export const SiteHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
