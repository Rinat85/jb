import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const StyledOverlay = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 103;
`;

const StyledModalWrap = styled.div`
    max-width: 520px;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 37px 26px 45px 37px;
    transform: translate(-50%, -50%);
    z-index: 104;
    background-color: white;

    span {
        position: absolute;
        top: 12px;
        right: 12px;
        color: #a11a39;
        font-size: 18px;
        cursor: pointer;
    }

    h4 {
        font-size: 30px;
        color: #a11a39;
        text-align: center;
    }

    p {
        font-family: 'GothamPro-Light';
        font-size: 16px;
        color: #353535;
        text-align: center;
        margin: 15px auto 34px;
    }

    @media screen and (max-width: 600px) {
        max-width: 80vw;   
    }
`;

const StyledModalForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    input {
        width: 100%;
        padding: 22px 34px 20px 34px;
        margin: 0 auto 20px;
        border: 1px solid #dcdcdc;
        font-size: 16px;
        transform: skew(-15deg);

        ::placeholder {
            transform: skew(15deg);
            color: #858585;
            font-weight: 400;
        }

        :focus {
            outline: none;
        }
    }

    button {
        width: 361px;
        height: 56px;
        margin: ${props => props.margin};
        background-color: #a11a39;
        text-align: center;
        transform: skewX(-15deg);
        transition: box-shadow 0.3s ease-in-out;
        color: transparent;
        cursor: pointer;

        ::before {
            content: 'отправить';
            display: inline-block;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) skew(15deg);
            text-transform: uppercase;
        }

        :hover {
            box-shadow: 0px 0px 19px 0px rgba(161,26,57,1);
        }

        @media screen and (max-width: 600px) {
            max-width: 100%;
        }
    }
    
`;

class MainModal extends React.Component {

    state = {
        name: '',
        phone: ''
    };

    render() {
        return (
            <StyledOverlay show={this.props.show}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2} offset={0}>
                    <StyledModalWrap>
                        <span onClick={this.props.handleClick}>✖</span>
                        <h4>Не нашли что искали?</h4>
                        <p>оставьте заявку мы с вами свяжемся</p>
                        <StyledModalForm>
                            <input type="text" name="name" placeholder="Имя" />
                            <input type="text" name="phone" placeholder="Номер телефона" />
                            <button type="submit">Отправить</button>
                        </StyledModalForm>
                    </StyledModalWrap>
                </ScrollAnimation>
            </StyledOverlay>
        )
    }
};

export default MainModal;