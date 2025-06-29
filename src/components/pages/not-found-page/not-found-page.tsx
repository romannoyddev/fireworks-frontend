import Main from '../../styled/main/main';
import {
  NotFoundInner,
  NotFoundLink,
  NotFoundSection,
  NotFoundTitle,
  NotFoundWrapper
} from './styles';

const NotFoundPage: React.FC = () => {
  return (
    <Main>
      <NotFoundSection>
        <NotFoundWrapper>
          <NotFoundInner>
            <NotFoundTitle as="h1" $textColor="pink" $textSize="l">
              Page not found
            </NotFoundTitle>
            <NotFoundLink to="/">Return to home page</NotFoundLink>
          </NotFoundInner>
        </NotFoundWrapper>
      </NotFoundSection>
    </Main>
  );
};

export default NotFoundPage;
