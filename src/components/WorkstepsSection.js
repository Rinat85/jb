import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

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
    return (
        <StyledWorkstepsSection id="works">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text="Этап работы" color="#ffffff" subcolor="#ffffff" />
                </ScrollAnimation>
                <StyledWorkstepsItems>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                            <img src="../img/step1.png" alt="step1" />
                            <h4>1 этап</h4>
                            <p>Клиент приезжает в офис и получает консультацию (мы предоставляем клиенту вакансии с разных стран, он определяется....)</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                            <img src="../img/step2.png" alt="step2" />
                            <h4>2 этап</h4>
                            <p>Заключается догоровор между клиентом и компанией ( 100% оплата через банк только)</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={600} animateOnce={true}>
                            <img src="../img/step3.png" alt="step3" />
                            <h4>3 этап</h4>
                            <p>Клиент предоставляет нам все необходимые документы со своей стороны (паспорт, фото, мед.справка, и т.д.)</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                            <img src="../img/step4.png" alt="step4" />
                            <h4>4 этап</h4>
                            <p>Подготовка документов (смотря какое посольство (заполнение анкеты, резюме, виза) и передаётся работадателю в зарубеж. И работадатель отправляет нам РАБОЧИЙ КОНТРАКТ</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                            <img src="../img/step5.png" alt="step5" />
                            <h4>5 этап</h4>
                            <p>Передаётся в консульство</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="fadeIn" duration={2} delay={600} animateOnce={true}>
                            <img src="../img/step6.png" alt="step6" />
                            <h4>6 этап</h4>
                            <p>Получается виза. ЕСЛИ В ПОЛУЧЕНИИ ВИЗЫ КЛИЕНТУ ОТКАЗАЛИ (на это должна быть весомая причина) 100% СУММА ВОЗВРАЩАЕТСЯ КЛИЕНТУ КРОМЕ КОНСУЛЬСКОГО СБОРА</p>
                        </ScrollAnimation>
                    </StyledWorkstepsItem>
                </StyledWorkstepsItems>
            </Container>
        </StyledWorkstepsSection>
    )
};

export default WorkstepsSection;