import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import ApartmentData from "../../utils/datas/ApartmentDatas";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";

const StyledSection = styled.section`
  display: flex;
  margin-inline: 100px;
  margin-top: 30px;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  color: ${colors.primary};
  font-size: 36px;
`;

const StyledLocation = styled.p`
  color: ${colors.primary};
  font-size: 18px;
`;

const HostWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHostName = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  max-width: 93px;
`;

const StyledHostPicture = styled.img`
  widht: 64px;
  height: 64px;
  border-radius: 50%;
`;

const TagsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 23px;
  margin-inline: 100px;
`;

function Logements() {
  const { id } = useParams();
  const Apartment = ApartmentData.find((apartment) => apartment.id === id);

  return (
    <main>
      <Carrousel slides={Apartment.pictures} />
      <StyledSection>
        <div>
          <StyledTitle>{Apartment.title}</StyledTitle>
          <StyledLocation>{Apartment.location}</StyledLocation>
        </div>
        <HostWrapper>
          <StyledHostName>{Apartment.host.name}</StyledHostName>
          <StyledHostPicture src={Apartment.host.picture} alt="host" />
        </HostWrapper>
      </StyledSection>
      <TagsWrapper>
        {Apartment.tags.map((tag, index) => (
          <Tags key={index} name={tag}></Tags>
        ))}
      </TagsWrapper>
    </main>
  );
}

export default Logements;
