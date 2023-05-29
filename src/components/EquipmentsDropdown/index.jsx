import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { ReactComponent as OpenDropdown } from "../../assets/ArrowDropdown/OpenDropdown.svg";
import { ReactComponent as CloseDropdown } from "../../assets/ArrowDropdown/CloseDropdown.svg";
import { useState } from "react";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 15px;
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

const TextWrapper = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Description = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  padding: 36px 27px 19px 18px;
  height: 194px;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

function EquipmentsDropdown({ equipments }) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <ButtonWrapper>
      <div style={{ width: "100%" }}>
        <StyledButton onClick={handleClick}>
          Équipements
          <i>{isOpen ? <CloseDropdown /> : <OpenDropdown />}</i>
        </StyledButton>
        {isOpen && (
          <TextWrapper>
            <Description>
              <StyledList>
                {equipments.map((equipment, index) => (
                  <li style={{ margin: "6px" }} key={index}>
                    {equipment}
                  </li>
                ))}
              </StyledList>
            </Description>
          </TextWrapper>
        )}
      </div>
    </ButtonWrapper>
  );
}

export default EquipmentsDropdown;
