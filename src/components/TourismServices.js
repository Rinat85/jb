import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';

const StyledServicesSection = styled.section`
    padding: 97px 0 67px 0;
    position: relative;
    overflow: hidden;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 172px;
        height: 172px;
        top: 50%;
        left: -172px;
        border: 2px solid #a11a39;
        transform: rotateZ(45deg) translateY(-50%);
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        width: 172px;
        height: 172px;
        top: 50%;
        right: -43px;
        border: 2px solid #a11a39;
        transform: rotateZ(45deg) translateY(-50%);
    }

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;

        ::before {
            display: none;
        }

        ::after {
            display: none;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        padding: 37px 0 57px 0;
    }

    @media screen and (max-width: 1340px) {

        ::before {
            display: none;
        }

        ::after {
            display: none;
        }
    }

    
`;

const StyledServicesItems = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -24px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        justify-content: center;
    }
`;

const StyledServicesItem = styled.div`
    max-width: 340px;
    margin-top: 24px;
    text-align: center;

    h3 {
        font-family: 'Geometria-Bold';
        font-size: 18px;
        color: #2d2d2d;
        text-transform: uppercase;
        text-align: center;
        padding-top: 30px;
        margin-bottom: 40px;
        line-height: 1.5em;

        @media screen and (max-width: 600px) {
            font-size: 16px;
            margin-bottom: 20px;
        }
         
    }

    @media screen and (max-width: 600px) {
        max-width: 90%;
        margin: 16px auto 0;

        img {
            max-width: 100%;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        width: 45%;
        margin: 16px 20px 0 20px;

    }

`;

const TourismServicesTours = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -24px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        justify-content: center;
    }
`;

const TourismServicesItem = styled.div`
    max-width: 203px;
    margin-top: 24px;

    h3 {
        font-family: 'Geometria-Bold';
        font-size: 18px;
        color: #2d2d2d;
        text-transform: uppercase;
        text-align: center;
        padding-top: 30px;
        margin-bottom: 40px;
        line-height: 1.5em;

        @media screen and (max-width: 600px) {
            font-size: 16px;
            margin-bottom: 20px;
            text-align: center;
        }
         
    }

    @media screen and (max-width: 600px) {
        max-width: 90%;
        margin: 16px auto 0;
        text-align: center;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        max-width: 45%;
        margin: 16px 20px 0 20px;

        img {
            max-width: 100%;
        }
    }

`;

const StyledBorderedHeading = styled.div`
    display: flex;
    justify-content: center;

    div {
        flex-grow: 2;
        width: 100%;
        height: 16px;
        border-bottom: 2px solid #a11a39;
    }

    h4 {
        flex-grow: 1;
        color: #2d2d2d;
        font-size: 32px;
        text-align: center;
        width: 100%;
        margin-bottom: 40px;
    }
`;

const TourismServices = () => {

    const { t } = useTranslation();

    return (
        <StyledServicesSection id="services">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("наши услуги")} color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <StyledServicesItems>
                    <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services1.png" alt="eu"/>
                            <h3>{t("бронирование отелей по всему миру")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services2.png" alt="eu"/>
                            <h3>{t("Бронирование авиабилетов по всем направлениям")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={3} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services3.png" alt="eu"/>
                            <h3>{t("Подготовка необходимых документов в посольство")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services4.png" alt="eu"/>
                            <h3>{t("Выписка медицинских страхований")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services5.png" alt="eu"/>
                            <h3>{t("Транспортное обслуживание в период пребывания за границей (трансферы)")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={3} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/tourism-services6.png" alt="eu"/>
                            <h3>{t("Бронирование экскурсий, билетов на выставки")}</h3>
                        </StyledServicesItem>
                    </ScrollAnimation>
                </StyledServicesItems>
                <StyledBorderedHeading>
                    <div></div>
                    <h4>{t("Виды туров")}</h4>
                    <div></div>
                </StyledBorderedHeading>
                <TourismServicesTours>
                    <ScrollAnimation animateIn="flipInX" duration={2} animateOnce={true}>
                        <TourismServicesItem >
                            <img src="../img/tours1.png" alt="eu"/>
                            <h3>{t("ИНДИВИДУАЛЬНЫЕ ТУРЫ")}</h3>
                        </TourismServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={2} animateOnce={true}>
                        <TourismServicesItem >
                            <img src="../img/tours2.png" alt="eu"/>
                            <h3>{t("ГРУППОВЫЕ ТУРЫ")}</h3>
                        </TourismServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={2} animateOnce={true}>
                        <TourismServicesItem >
                            <img src="../img/tours3.png" alt="eu"/>
                            <h3>{t("КОРПОРАТИВНЫЕ ТУРЫ")}</h3>
                        </TourismServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={2} animateOnce={true}>
                        <TourismServicesItem >
                            <img src="../img/tours4.png" alt="eu"/>
                            <h3>{t("СПОРТИВНЫЕ ТУРЫ")}</h3>
                        </TourismServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={2} animateOnce={true}>
                        <TourismServicesItem >
                            <img src="../img/tours5.png" alt="eu"/>
                            <h3>{t("VIР ТУРЫ")}</h3>
                        </TourismServicesItem>
                    </ScrollAnimation>
                </TourismServicesTours>
            </Container>
        </StyledServicesSection>
    )
};

export default TourismServices;