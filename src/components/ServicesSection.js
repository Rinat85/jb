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
    max-width: 540px;
    flex-grow: 1;
    border: 1px solid #dcdcdc;
    margin-top: 24px;

    h3 {
        font-family: 'Geometria-Bold';
        font-size: 18px;
        color: #2d2d2d;
        text-transform: uppercase;
        padding-top: 30px;
        padding-left: 37px;
        margin-bottom: 40px;

        ::after {
            content: '';
            display: block;
            margin-top: 18px;
            width: 73px;
            height: 3px;
            background-color: #a11a39;
        }

        @media screen and (max-width: 600px) {
            font-size: 16px;
            margin-bottom: 20px;
        }
         
    }

    ul {
        padding-left: 37px;
        padding-bottom: 26px;

        li {
            display: flex;
            align-items: center;
            font-family: 'GothamPro-Light';
            font-size: 16px;
            line-height: 1.8em;
            color: #898888;

            span {
                display: inline-block;
                width: 19px;
                height: 19px;
                margin-right: 14px;
                background: url('../img/tick-inside-circle.png') no-repeat center center;
            }
        }

        @media screen and (max-width: 600px) {
            padding-left: 17px;
            padding-right: 17px;

            li {
                font-size: 12px;
            }
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
        max-width: 45%;
        margin: 16px 20px 0 20px;

        img {
            max-width: 100%;
        }
    }

`;

const ServicesSection = () => {

    const { t } = useTranslation();

    return (
        <StyledServicesSection id="services">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("наши услуги")} color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <StyledServicesItems>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/services-bg-eu.png" alt="eu"/>
                            <h3>{t("Работа в европе")}</h3>
                            <ul>
                                <li><span></span>{t("Работа в Германии  на складах одежды")}</li>
                                <li><span></span>{t("Работа для водителей в Чехии")}</li>
                                <li><span></span>{t("Работа для электриков в Будапеште")}</li>
                                <li><span></span>{t("Работа в Голландии на складе овощей")}</li>
                                <li><span></span>{t("Работа в Италии для сварщиков Mig/Mag, Tig")}</li>
                            </ul>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/services-bg-us.png" alt="us"/>
                            <h3>{t("Работа в сша")}</h3>
                            <ul>
                                <li><span></span>{t("Работа в Нью-йорке  на складах одежды")}</li>
                                <li><span></span>{t("Работа для водителей в Техасе")}</li>
                                <li><span></span>{t("Работа для электриков в Майми")}</li>
                                <li><span></span>{t("Работа в Голивуде на складе овощей")}</li>
                                <li><span></span>{t("Работа в Калифорнии для сварщиков Mig/Mag, Tig")}</li>
                            </ul>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/services-bg-can.png" alt="can"/>
                            <h3>{t("Работа в канаде")}</h3>
                            <ul>
                                <li><span></span>{t("Работа в Торонто  на складах одежды")}</li>
                                <li><span></span>{t("Работа для водителей в Бросбоне")}</li>
                                <li><span></span>{t("Работа для электриков в Онтарио")}</li>
                                <li><span></span>{t("Работа в Ойханенсбурге на складе овощей")}</li>
                                <li><span></span>{t("Работа в Вайоминге для сварщиков Mig/Mag, Tig")}</li>
                            </ul>
                        </StyledServicesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledServicesItem >
                            <img src="../img/services-bg-au.png" alt="eu"/>
                            <h3>{t("Работа в австралии")}</h3>
                            <ul>
                                <li><span></span>{t("Работа в Австралии  на складах одежды")}</li>
                                <li><span></span>{t("Работа для водителей в Австралии")}</li>
                                <li><span></span>{t("Работа для электриков в Австралии")}</li>
                                <li><span></span>{t("Работа в Австралии на складе овощей")}</li>
                                <li><span></span>{t("Работа в Австралии для сварщиков Mig/Mag, Tig")}</li>
                            </ul>
                        </StyledServicesItem>
                    </ScrollAnimation>
                </StyledServicesItems>
            </Container>
        </StyledServicesSection>
    )
};

export default ServicesSection;