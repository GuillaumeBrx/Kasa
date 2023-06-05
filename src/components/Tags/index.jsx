import styled from "styled-components";
import colors from "../../utils/styles/colors";

const StyledTag = styled.div`
  color: white;
  background-color: ${colors.primary};
  padding-inline: 20px;
  padding-block: 5px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding-inline: 29px;
    padding-block: 2px;
  }
`;

const StyledTagName = styled.p`
  font-size: 14px;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

function Tags({ name }) {
  return (
    <StyledTag>
      <StyledTagName>{name}</StyledTagName>
    </StyledTag>
  );
}

export default Tags;
