import styled from "styled-components";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import AboutDatas from "../../utils/datas/AboutDatas";

const StyledMain = styled.main`
  padding-inline: 100px;
`;

function About() {
  return (
    <StyledMain>
      <Banner />
      {AboutDatas.map((data, index) => (
        <Dropdown
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
    </StyledMain>
  );
}

export default About;
