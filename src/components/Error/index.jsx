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
`;

const ErrorCode = styled.span`
  font-size: 280px;
  font-weight: bold;
`;

const ErrorMsg = styled.p`
  font-size: 36px;
  margin-bottom: 116px;
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
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
