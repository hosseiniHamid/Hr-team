import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid #4d8de6;
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="I always enjoyed having Hamidreza in my team! his positivity , courage and and friendly behavior has been always contributing a lot to any project I had him on. His flexibility and willingness to learn new things makes Hamidreza very easy to collaborate with."
            name="Saeid Makhmali"
            image="avatar-1"
          />

          <Card
            text="Hamidreza consistently demonstrated briliant talent in his course that I was its lecturer. He possesses a strong moral compass, exhibiting integrity, honesty, and a deep sense of responsibility. His hardworking to done in his projects was outstanding."
            name="Farzane kimiyaei"
            image="avatar-2"
          />

          <Card
            text="About his tech skills I can say if you give a project to him he will deliver that to you beyond your expectations he is one of the front end developers who I can say he is more than his work experience Beyond his technical skills, he is a pleasure to work with. he is a team player, always willing to lend a helping hand and share his knowledge with colleagues."
            name="Nima ferdowsi"
            image="avatar-3"
          />

          <Card
            text="HamidReza is a very hard-working person who can tackle any front-end problem with ease. We have worked together on several projects, and I found him a very productive person, hardworking, broad-minded, and forward-thinking individual. The desire for proficiency and education makes HamidReza a valuable asset to the team. Working with him is a signature of success."
            name="Hamed Atashbar"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
