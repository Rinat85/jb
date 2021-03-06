import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

import Container from './Container';
import Bg from '../img/tourism-stepper-bg.png';

const StyledStepperWrapper = styled.section`
    background: url(${Bg}) no-repeat center center;
    background-size: cover;
    padding: 97px 0 67px 0;

    h4 {
        font-size: 30px;
        color: white;
        text-align: center;
    }

`;

const StyledSectionHeader = styled.h2`
    position: relative;
    color: ${props => props.color};
    font-size: 48px;
    text-align: center;
    margin-bottom: 62px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        margin: 30px 0;
        left: 50%;
        transform: translateX(-50%);
        width: 73px;
        height: 3px;
        background-color: ${props => props.subcolor};
    }

    @media screen and (max-width: 600px) {
        font-size: 32px;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        font-size: 32px;
    }
`;

const StyledStepper = styled.div`
    max-width: 460px;
    margin: 0 auto;

    ul {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledStep = styled.li`
    position: relative;
    box-sizing: border-box;
    width: 76px;
    height: 76px;
    background-color: ${props => props.active ? '#a11a39' : 'rgba(255, 255, 255, 0.3)' };
    line-height: 73px;
    text-align: center;
    color: white;
    font-family: 'GothamPro-Bold';
    font-size: 32px;
    border-radius: 50%;
    border: ${props => props.active ? '3px solid white' : '3px solid transparent' };
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    ::after {
       content: '';
       position: absolute;
       top: 50%;
       left: 73px;
       transform: translateY(-50%);
       display: block;
       width: 116px;
       height: 12px;
       background: url('../img/stepper-element.png') no-repeat center center;
       background-size: cover; 

       @media screen and (max-width: 600px) {
            width: 94px;
        }
    }

    &:nth-child(3) {
        ::after {
            display: none;
        }
    }
`;

const StyledStepperForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 32px auto 0;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        width: 80%;
       margin: 12px auto;
       padding-top: 20px;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
       width: 80%;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        width: 80%;
    }
`;

const STyledContactInput = styled.input`
    width: 745px;
    padding: 22px 34px 20px 34px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    transform: skew(-15deg);
    margin: 15px 0;

    ::placeholder {
        transform: skew(15deg);
        color: #828282;
    }

    :focus {
        outline: none;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
       margin: 12px auto;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
       margin: 12px auto;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        margin: 12px auto;
    }
`;

const STyledContactButton = styled.button`

    position: relative;
    width: 360px;
    padding: 23px 34px 23px 34px;
    margin: 15px 0 15px 15px;
    font-size: 16px;
    transform: skew(-15deg);
    background-color: #a11a39;
    color: transparent;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    ::before {
    content: '${props => props.stepbutton}';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skew(15deg);
        color: white;
        font-size: 16px;
    }

    ::placeholder {
        transform: skew(15deg);
        color: #dcdcdc;
    }

    :focus {
        outline: none;
    }

    @media screen and (max-width: 600px) {
       margin: 12px auto;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        max-width: 40%; 
       margin: 12px auto;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        margin: 12px auto;
    }
`;

const TourismStepper = () => {

    const { t } = useTranslation();
    const [ formActivePanel, setFormActivePanel ] = useState(1);
    const [ userInput, setUserInput ] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            tourCountry: '',
            tourDate: '',
            tourUsername: '',
            tourUserphone: ''
        }
    );
    const [isSent, setIsSent] = useState(false);
   
    const handleNextClick = param => e => setFormActivePanel(param);

    const handleInputChange = e => {
        const { name, value } = e.target;
        
        setUserInput({[name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/stepper.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                tourCountry: userInput.tourCountry, 
                tourDate: userInput.tourDate, 
                tourUsername: userInput.tourUsername, 
                tourUserphone: userInput.tourUserphone 
            }),
        }).then(res => res.text())
        .then(() => setIsSent(true))
        .catch(err => console.log(err));
    };

    return (
        <StyledStepperWrapper>
            <Container>
                <ScrollAnimation animateIn="jackInTheBox" duration={1} animateOnce={true}>
                    <StyledSectionHeader color="white" subcolor="#a11a39">
                        {t("ХОТИТЕ ПОДОБРАТЬ ТУР?")}
                    </StyledSectionHeader>
                </ScrollAnimation>
                {!isSent &&
                (<>
                    <StyledStepper>
                        <ul>
                            <StyledStep onClick={handleNextClick(1)} active={formActivePanel === 1}>1</StyledStep>
                            <StyledStep onClick={handleNextClick(2)} active={formActivePanel === 2}>2</StyledStep>
                            <StyledStep onClick={handleNextClick(3)} active={formActivePanel === 3}>3</StyledStep>
                        </ul>
                    </StyledStepper>
                    <StyledStepperForm onSubmit={handleSubmit}>

                        {formActivePanel === 1 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourCountry" value={userInput.tourCountry} onChange={handleInputChange} placeholder={t("Выбрать страну")} required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="button" onClick={handleNextClick(2)} stepbutton={t("Далее")}>{t("Далее")}</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                        {formActivePanel === 2 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourDate" value={userInput.tourDate} onChange={handleInputChange} placeholder={t("Ориентировочная дата")} required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="button" onClick={handleNextClick(3)} stepbutton={t("Далее")}>{t("Далее")}</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                        {formActivePanel === 3 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourUsername" value={userInput.tourUsername} onChange={handleInputChange} placeholder={t("Имя")} required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInLeft" duration={2} animateOnce={true}>
                                <STyledContactInput type="text" name="tourUserphone" value={userInput.tourUserphone} onChange={handleInputChange} placeholder={t("Номер телефона")} required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="submit" stepbutton={t("Отправить")}>{t("Отправить")}</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                    </StyledStepperForm>
                </>)}
                {isSent && 
                (<h4>{t("Благодарим за заявку! Наши менеджеры свяжутся с вами.")}</h4>)}
            </Container>
        </StyledStepperWrapper>
    )
};

export default TourismStepper;