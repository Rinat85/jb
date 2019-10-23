import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import Bg from '../img/tourism-stepper-bg.png';

const StyledStepperWrapper = styled.section`
    background: url(${Bg}) no-repeat center center;
    background-size: cover;
    padding: 97px 0 67px 0;
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
    content: '${props => props.submit ? 'отправить' : 'далее'}';
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

class TourismStepper extends React.Component {

    state = {
        formActivePanel: 1,
        tourCountry: '',
        tourDate: '',
        tourUsername: '',
        tourUserphone: ''
    };

    handleNextClick = (param) => (e) => {
        this.setState({
            formActivePanel: param
        });
    };

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value 
        });
    }

    handleSubmission = (e) => {
        e.prevent.default();
        fetch('/mail.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tourCountry : this.state.tourCountry,
                tourDate : this.state.tourDate,
                tourUsername : this.state.tourUsername,
                tourUserphone : this.state.tourUserphone
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <StyledStepperWrapper>
                <Container>
                    <ScrollAnimation animateIn="jackInTheBox" duration={1} animateOnce={true}>
                        <StyledSectionHeader color="white" subcolor="#a11a39">
                            ХОТИТЕ ПОДОБРАТЬ ТУР?
                        </StyledSectionHeader>
                    </ScrollAnimation>
                    <StyledStepper>
                        <ul>
                            <StyledStep onClick={this.handleNextClick(1)} active={this.state.formActivePanel === 1}>1</StyledStep>
                            <StyledStep onClick={this.handleNextClick(2)} active={this.state.formActivePanel === 2}>2</StyledStep>
                            <StyledStep onClick={this.handleNextClick(3)} active={this.state.formActivePanel === 3}>3</StyledStep>
                        </ul>
                    </StyledStepper>
                    <StyledStepperForm onSubmit={this.handleSubmission}>

                        {this.state.formActivePanel === 1 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourCountry" value={this.state.tourCountry} onChange={this.handleInputChange} placeholder="Выбрать страну" required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="button" onClick={this.handleNextClick(2)}>Далее</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                        {this.state.formActivePanel === 2 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourDate" value={this.state.tourDate} onChange={this.handleInputChange} placeholder="Ориентировочная дата" required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="button" onClick={this.handleNextClick(3)}>Далее</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                        {this.state.formActivePanel === 3 &&
                        (<>
                            <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                                <STyledContactInput type="text" name="tourUsername" value={this.state.tourUsername} onChange={this.handleInputChange} placeholder="Имя" required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInLeft" duration={2} animateOnce={true}>
                                <STyledContactInput type="text" name="tourUserphone" value={this.state.tourUserphone} onChange={this.handleInputChange} placeholder="Номер телефона" required />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" duration={2} animateOnce={true}>
                                <STyledContactButton type="submit" submit>Отправить</STyledContactButton>
                            </ScrollAnimation>
                        </>)}

                    </StyledStepperForm>
                </Container>
            </StyledStepperWrapper>
        )
    }
};

export default TourismStepper;