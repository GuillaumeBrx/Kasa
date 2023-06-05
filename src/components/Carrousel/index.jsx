import { useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/ArrowSlide/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/ArrowSlide/LeftArrow.svg";
import styled from "styled-components";

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-inline: 100px;
  border-radius: 25px;

  @media (max-width: 898px) {
    padding-inline: 20px;
  }
`;

const Arrow = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &.left-Arrow {
    left: 150px;

    @media (max-width: 898px) {
      left: 25px;
    }
  }

  &.right-Arrow {
    right: 150px;

    @media (max-width: 898px) {
      right: 25px;
    }
  }
`;

const Slider = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;

  @media (max-width: 898px) {
    height: 255px;
  }
`;

const StyledRightArrow = styled(RightArrow)`
  @media (max-width: 898px) {
    height: 20px;
    width: 12px;
  }
`;

const StyledLeftArrow = styled(LeftArrow)`
  @media (max-width: 898px) {
    height: 20px;
    width: 12px;
  }
`;

const SliderNumber = styled.span`
  position: absolute;
  bottom: 25px;
  left: 50%;
  color: white;
`;

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SlideWrapper>
      {length > 1 && (
        <Arrow className="left-Arrow" onClick={prevImage}>
          <StyledLeftArrow />
        </Arrow>
      )}
      {length > 1 && (
        <Arrow className="right-Arrow" onClick={nextImage}>
          <StyledRightArrow />
        </Arrow>
      )}
      {slides.map((image, index) => (
        <Slider key={index} active={index === current}>
          {index === current && (
            <SlideImage src={image} alt="img-appartement" />
          )}
          {index === current && length > 1 && (
            <SliderNumber>
              {current + 1}/{length}
            </SliderNumber>
          )}
        </Slider>
      ))}
    </SlideWrapper>
  );
}

export default Carrousel;
