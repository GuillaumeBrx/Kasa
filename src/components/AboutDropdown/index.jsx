import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { ReactComponent as OpenDropdown } from "../../assets/ArrowDropdown/OpenDropdown.svg";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 108px;
  padding-block: 33px 46px;
  gap: 31px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  width: 100%;
  height: 47px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding-inline: 18px;
`;

function AboutDropdown() {
  return (
    <ButtonWrapper>
      <StyledButton>
        Fiabilité
        <i>
          <OpenDropdown />
        </i>
      </StyledButton>
      <StyledButton>
        Respect
        <i>
          <OpenDropdown />
        </i>
      </StyledButton>
      <StyledButton>
        Service
        <i>
          <OpenDropdown />
        </i>
      </StyledButton>
      <StyledButton>
        Sécurité
        <i>
          <OpenDropdown />
        </i>
      </StyledButton>
    </ButtonWrapper>
  );
}

export default AboutDropdown;
