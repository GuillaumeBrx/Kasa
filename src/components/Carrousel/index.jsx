import { useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/ArrowSlide/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/ArrowSlide/LeftArrow.svg";
import styled from "styled-components";

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-inline: auto;
  width: 1240px;
  border-radius: 25px;
`;

const Arrow = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &.left-Arrow {
    left: 25px;
  }

  &.right-Arrow {
    right: 25px;
  }
`;

const Slider = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

const SlideImage = styled.img`
  width: 1240px;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
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
          <LeftArrow />
        </Arrow>
      )}
      {length > 1 && (
        <Arrow className="right-Arrow" onClick={nextImage}>
          <RightArrow />
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
