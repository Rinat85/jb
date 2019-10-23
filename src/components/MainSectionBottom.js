import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import MainBottomBg from '../img/main-header-bg2.png';
import MainBottomLogo from '../img/main-header-logo2.png';
import MainButton from './MainButton';

const StyledHeader = styled.header`
    width: 100%;
    background: url(${MainBottomBg}) no-repeat center center;
    background-size: cover;
    overflow: hidden;
    padding-bottom: 126px;

    @media screen and (max-width: 600px) {
        background-position: 45% center;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        background-position: 40% center;
    }
`;

const StyledHeaderBanner = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 97px;
    width: 60%;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0 auto;
        padding: 97px 0 0 0
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        padding: 97px 75px 0 75px;
        width: 100%;
        margin: 0 auto;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        padding: 97px 75px 0 75px;
    }
`;

const StyledHeaderBannerLogo = styled.div`
    width: 258px;
    height: 141px;
    background: url(${MainBottomLogo}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        width: 129px;
        height: 70px;
        margin: 0 auto;
    }
`;

const StyledHeaderBannerTitle = styled.h1`
    position: relative;
    margin: 22px 22px 100px 60px;
    font-size: 48px;
    color: white;
    text-transform: uppercase;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 118px;
        height: 1px;
        background-color: white;
        left: 0;
        bottom: -37px;
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.3);
        left: -106%;
        top: 50%;
        margin-left: 14px;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 1.5em;
        margin: 20px auto 30px;
        text-align: center;

        ::after {
            display: none;
        }

        ::before {
            bottom: -18px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        font-size: 32px;
        line-height: 1.5em;
        margin-bottom: 30px;

        ::before {
            bottom: -18px;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        font-size: 32px;
        line-height: 1.5em;
    }
`;

const StyledHeaderBannerText = styled.p`
    margin-left: 60px;
    margin-bottom: 36px;
    color: white;
    font-size: 14px;
    font-family: 'GothamPro-Light';
    line-height: 1.5em;

    @media screen and (max-width: 600px) {
        width: 70%;
        line-height: 1.5em;
        text-align: justify;
        font-size: 14px;
        margin: 36px auto;
    }
`;



const MainSectionBottom = (props) => {

    const { text, dataType, linkTo } = props;

    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <StyledHeader dataType={dataType}>
                <Container>
                    <StyledHeaderBanner>
                        <StyledHeaderBannerLogo />
                        <StyledHeaderBannerTitle>
                            Туризм
                        </StyledHeaderBannerTitle>
                        <StyledHeaderBannerText>
                            Наша команда квалифицированные и первоклассные специалисты в области туризма.Мы представляем Вам самые разные направления туризма, а именно отдых в курортных зонах, деловой туризм, эко туризм, оздоровительный, конгрессно - выставочный, приключенческий, спортивный. Наша главная задача - это обеспечение безопасного, комфортного и качественного отдыха по самым низким ценам
                        </StyledHeaderBannerText>
                        <MainButton text={text} linkTo={linkTo} margin="0 0 197px 60px" />
                    </StyledHeaderBanner>
                </Container>
            </StyledHeader>
        </ScrollAnimation>
    )
};

export default MainSectionBottom;