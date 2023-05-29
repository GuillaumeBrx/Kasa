import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import ApartmentData from "../../utils/datas/ApartmentDatas";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Dropdown from "../../components/Dropdown";
import EquipmentsDropdown from "../../components/EquipmentsDropdown";
import { ReactComponent as PinkStar } from "../../assets/Stars/PinkStar.svg";
import { ReactComponent as GreyStar } from "../../assets/Stars/GreyStar.svg";

const StyledSection = styled.section`
  display: flex;
  margin-inline: 100px;
  justify-content: space-between;
`;

const StyledSectiondDropdown = styled.section`
  display: flex;
  margin-inline: 100px;
  margin-top: 26px;
  justify-content: center;
  gap: 76px;
`;

const StyledDropdownDiv = styled.div`
  width: 582px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
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
  justify-content: flex-end;
  align-items: center;
`;

const StyledHostName = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  max-width: 93px;
`;

const StyledHostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const TagsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 23px;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

function Logements() {
  const { id } = useParams();
  const Apartment = ApartmentData.find((apartment) => apartment.id === id);

  const renderStars = (rating) => {
    const stars = [];
    const pinkStars = parseInt(rating, 10);
    const greyStars = 5 - pinkStars;

    for (let i = 0; i < pinkStars; i++) {
      stars.push(<PinkStar key={`pinkStar-${i}`} />);
    }

    for (let i = 0; i < greyStars; i++) {
      stars.push(<GreyStar key={`greyStar-${i}`} />);
    }

    return stars;
  };

  return (
    <main>
      <Carrousel slides={Apartment.pictures} />
      <StyledSection>
        <StyledDiv>
          <div>
            <StyledTitle>{Apartment.title}</StyledTitle>
            <StyledLocation>{Apartment.location}</StyledLocation>
          </div>
          <TagsWrapper>
            {Apartment.tags.map((tag, index) => (
              <Tags key={index} name={tag} />
            ))}
          </TagsWrapper>
        </StyledDiv>
        <StyledDiv>
          <HostWrapper>
            <StyledHostName>{Apartment.host.name}</StyledHostName>
            <StyledHostPicture src={Apartment.host.picture} alt="host" />
          </HostWrapper>
          <StarsWrapper>{renderStars(Apartment.rating)}</StarsWrapper>
        </StyledDiv>
      </StyledSection>
      <StyledSectiondDropdown>
        <StyledDropdownDiv>
          <Dropdown description={Apartment.description} />
        </StyledDropdownDiv>
        <StyledDropdownDiv>
          <EquipmentsDropdown equipments={Apartment.equipments} />
        </StyledDropdownDiv>
      </StyledSectiondDropdown>
    </main>
  );
}

export default Logements;
