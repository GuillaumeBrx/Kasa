import styled from "styled-components";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import AboutDatas from "../../utils/datas/AboutDatas";

const StyledMain = styled.main`
  padding-inline: 100px;

  @media (max-width: 680px) {
    padding-inline: 20px;
  }
`;

function About() {
  return (
    <StyledMain>
      <Banner />
      {AboutDatas.map((data, index) => (
        <Dropdown
          type="description"
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
    </StyledMain>
  );
}

export default About;
