import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';

const StyledPartnersSection = styled.section`
    padding: 97px 0 97px 0;

    .slick-prev {
        background-color: #a11a39;
        border-radius: 50%;
    }

    .slick-next {
        background-color: #a11a39;
        border-radius: 50%;
    }

    @media screen and (min-width: 901px) and (max-width: 1140px) {
        .slick-prev {
            left: 25px;
        }

        .slick-next {
            right: 25px;
        }
    }
`;

const StyledSliderItem = styled.div`
    max-width: 255px;
    margin: 0 auto;
    height: 131px;
    border: 1px solid #a11a39;
    background: url('../img/${props => props.bg}.png') no-repeat center center;
    background-size: auto auto;
`;

const TourismPartners = () => {

    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <StyledPartnersSection id="partners">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("Наши партнеры")} color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <Slider {...settings}>
                    <div>
                        <StyledSliderItem bg="partner1" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner2" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner3" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner4" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner1" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner2" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner3" />
                    </div>
                    <div>
                        <StyledSliderItem bg="partner4" />
                    </div>
                </Slider>
            </Container>
        </StyledPartnersSection>
    );
};

export default TourismPartners;