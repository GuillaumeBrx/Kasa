import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 66px;
  color: ${colors.primary};

  @media (max-width: 680px) {
    gap: 0px;
    justify-content: center;
  }
`;

const ErrorCode = styled.span`
  font-size: 280px;
  font-weight: bold;

  @media (max-width: 680px) {
    font-size: 96px;
  }
`;

const ErrorMsg = styled.p`
  font-size: 36px;
  margin-bottom: 116px;

  @media (max-width: 680px) {
    font-size: 18px;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorMsg>Oups! La page que vous demandez n'existe pas.</ErrorMsg>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </ErrorWrapper>
  );
}

export default Error;
