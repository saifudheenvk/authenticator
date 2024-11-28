import Button from '@components/button/Button';
import { useNavigate } from 'react-router-dom';

import { ErrorContainer, NotFoundText, OopsDiv } from '@components/styled-components/error';

const Error = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <OopsDiv >Oops!</OopsDiv>
      <NotFoundText >Error 404: Page Not Found</NotFoundText>
      <Button label="Back Home" className="back-button button" handleClick={() => navigate(-1)} />
    </ErrorContainer>
  );
};
export default Error;
