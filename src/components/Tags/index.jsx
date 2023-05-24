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
`;

const StyledTagName = styled.p`
  font-size: 14px;
`;

function Tags({ name }) {
  return (
    <StyledTag>
      <StyledTagName>{name}</StyledTagName>
    </StyledTag>
  );
}

export default Tags;
