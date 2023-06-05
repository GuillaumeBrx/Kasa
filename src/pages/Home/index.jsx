import styled from "styled-components";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import ApartmentDatas from "../../utils/datas/ApartmentDatas";

const StyledMain = styled.main`
  padding-inline: 100px;

  @media (max-width: 600px) {
    padding-inline: 20px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 60px;
  margin-block: 43px;
  background-color: #f6f6f6;
  border-radius: 25px;
  padding: 56px 50px;

  @media (max-width: 600px) {
    padding: 0;
    background-color: white;
    justify-content: center;
  }
`;

function Home() {
  return (
    <StyledMain>
      <Banner />
      <CardsContainer>
        {ApartmentDatas.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            cover={data.cover}
            id={data.id}
          />
        ))}
      </CardsContainer>
    </StyledMain>
  );
}

export default Home;
