import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/worksteps-bg.png';

const StyledWorkstepsSection = styled.section`
    padding: 97px 0 67px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;
    }
`;

const StyledWorkstepsItems = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: stretch;

    @media screen and (max-width: 600px) {
        
    }
`;

const StyledWorkstepsItem = styled.div`
    width: 30%;
    text-align: center;
    margin: 35px auto;
    position: relative;

    h4 {
        margin-top: 0;
        font-family: 'GothamPro-Bold';
        font-size: 18px;
        color: #ffffff;
        margin: 28px 0 4px 0;
    }

    p {
        font-family: 'GothamPro-Light';
        font-size: 14px;
        color: #ffffff;
        line-height: 2em;
    }

    &:first-child::after {
        content: url('../img/arrow-up.png');
        position: absolute;
        top: 40px;
        right: -62px;
    }

    &:nth-child(2)::after {
        content: url('../img/arrow-up.png');
        position: absolute;
        top: 40px;
        right: -62px;
        transform: rotateX(180deg);
    }

    &:nth-child(4)::after {
        content: url('../img/arrow-up.png');
        position: absolute;
        top: 40px;
        right: -62px;
    }

    &:nth-child(5)::after {
        content: url('../img/arrow-up.png');
        position: absolute;
        top: 40px;
        right: -62px;
        transform: rotateX(180deg);
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0 5vw;
        margin: 0 auto 20px;

        h4 {
            margin-top: 10px;
        }

        p {
            font-size: 16px;
        }

        img {
            width: 55px;
            height: 55px;
        }

        &::after {
            display: none;
        } 
    }
`;


const WorkstepsSection = () => {

    const { t } = useTranslation();

    return (
        <StyledWorkstepsSection id="works">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("Этап работы")} color="#ffffff" subcolor="#ffffff" />
                </ScrollAnimation>
                <StyledWorkstepsItems>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                            <img src="../img/step1.png" alt="step1" />
                            <h4>1 {t("этап")}</h4>
                            <p>{t("1 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                            <img src="../img/step2.png" alt="step2" />
                            <h4>2 {t("этап")}</h4>
                            <p>{t("2 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={600} animateOnce={true}>
                            <img src="../img/step3.png" alt="step3" />
                            <h4>3 {t("этап")}</h4>
                            <p>{t("3 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                            <img src="../img/step4.png" alt="step4" />
                            <h4>4 {t("этап")}</h4>
                            <p>{t("4 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                            <img src="../img/step5.png" alt="step5" />
                            <h4>5 {t("этап")}</h4>
                            <p>{t("5 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={600} animateOnce={true}>
                            <img src="../img/step6.png" alt="step6" />
                            <h4>6 {t("этап")}</h4>
                            <p>{t("6 этап контекст")}</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                </StyledWorkstepsItems>
            </Container>
        </StyledWorkstepsSection>
    )
};

export default WorkstepsSection;