import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  height: 340px;
  width: 340px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-color: ${colors.primary};
  position: relative;
  border-radius: 10px;

  @media (max-width: 600px) {
    height: 255px;
  }
`;

const CardLink = styled(Link)`
  display: flex;
  flex-direct: column;
  align-items: flex-end;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  border-radius: 10px;
`;

const CardTitle = styled.p`
  color: white;
  font-size: 18px;
  padding: 20px;
  width: 100%;

  @media (max-width: 600px) {
    height: 64px;
    padding: 0;
    padding-inline: 20px;
    display: flex;
    align-items: center;
  }
`;

const CardCover = styled.img`
  position: absolute;
  top: 0px;
  height: 256px;
  width: inherit;
  border-radius: 10px 10px 0 0;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 191px;
  }
`;

function Card({ title, cover, id }) {
  return (
    <CardWrapper>
      <CardLink to={`/logements/${id}`}>
        <CardCover src={cover} alt="apartment cover picture"></CardCover>
        <CardTitle>{title}</CardTitle>
      </CardLink>
    </CardWrapper>
  );
}

export default Card;
