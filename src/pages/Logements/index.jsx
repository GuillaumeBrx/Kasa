import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import ApartmentData from "../../utils/datas/ApartmentDatas";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Dropdown from "../../components/Dropdown";
import { ReactComponent as PinkStar } from "../../assets/Stars/PinkStar.svg";
import { ReactComponent as GreyStar } from "../../assets/Stars/GreyStar.svg";

const StyledSection = styled.section`
  display: flex;
  margin-inline: 100px;
  justify-content: space-between;

  @media (max-width: 898px) {
    display: flex;
    flex-direction: column;
    margin-inline: 22px;
  }
`;

const StyledSectionDropdown = styled.section`
  display: flex;
  margin-inline: 100px;
  margin-top: 26px;
  justify-content: center;
  gap: 76px;

  @media (max-width: 898px) {
    display: block;
    margin-inline: 22px;
  }
`;

const StyledDropdownDiv = styled.div`
  width: 582px;

  @media (max-width: 898px) {
    width: 100%;
  }
`;

const StyledDivMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  justify-content: space-between;
`;

const StyledDivHost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  justify-content: space-between;

  @media (max-width: 898px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const StyledTitle = styled.p`
  color: ${colors.primary};
  font-size: 36px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const StyledLocation = styled.p`
  color: ${colors.primary};
  font-size: 18px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const HostWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const StyledHostName = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  max-width: 93px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const StyledHostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 23px;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    gap: 6px;
  }
`;

const StyledPinkStar = styled(PinkStar)`
  @media (max-width: 500px) {
    width: 13px;
    height: 13px;
  }
`;

const StyledGreyStar = styled(GreyStar)`
  @media (max-width: 500px) {
    width: 13px;
    height: 13px;
  }
`;

function Logements() {
  const { id } = useParams();
  const Apartment = ApartmentData.find((apartment) => apartment.id === id);

  const renderStars = (rating) => {
    const stars = [];
    const pinkStars = parseInt(rating, 10);
    const greyStars = 5 - pinkStars;

    for (let i = 0; i < pinkStars; i++) {
      stars.push(<StyledPinkStar key={`pinkStar-${i}`} />);
    }

    for (let i = 0; i < greyStars; i++) {
      stars.push(<StyledGreyStar key={`greyStar-${i}`} />);
    }

    return stars;
  };

  if (!Apartment) {
    return <Navigate to="*" />;
  }

  return (
    <main>
      <Carrousel slides={Apartment.pictures} />

      <StyledSection>
        <StyledDivMain>
          <div>
            <StyledTitle>{Apartment.title}</StyledTitle>
            <StyledLocation>{Apartment.location}</StyledLocation>
          </div>
          <TagsWrapper>
            {Apartment.tags.map((tag, index) => (
              <Tags key={index} name={tag} />
            ))}
          </TagsWrapper>
        </StyledDivMain>
        <StyledDivHost>
          <HostWrapper>
            <StyledHostName>{Apartment.host.name}</StyledHostName>
            <StyledHostPicture src={Apartment.host.picture} alt="host" />
          </HostWrapper>
          <StarsWrapper>{renderStars(Apartment.rating)}</StarsWrapper>
        </StyledDivHost>
      </StyledSection>

      <StyledSectionDropdown>
        <StyledDropdownDiv>
          <Dropdown
            type="description"
            title="Description"
            description={Apartment.description}
          />
        </StyledDropdownDiv>
        <StyledDropdownDiv>
          <Dropdown type="equipments" equipments={Apartment.equipments} />
        </StyledDropdownDiv>
      </StyledSectionDropdown>
    </main>
  );
}

export default Logements;
