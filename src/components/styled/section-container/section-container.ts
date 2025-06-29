import styled from 'styled-components';

const SectionContainer = styled.div`
  min-width: 320px;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 45px;
  }
`;

export default SectionContainer;
