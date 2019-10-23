import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import MainHeaderBg from '../img/main-header-bg.png';
import MigrationHeaderBg from '../img/header-bg.png';
import TourismHeaderBg from '../img/tourism-header-bg.png';
import Nav from './Nav';
import MigrationHeaderContent from './MigrationHeaderContent';
import MainHeaderContent from './MainHeaderContent';
import TourismHeaderContent from './TourismHeaderContent';


let ThemeBg = function(props) {
    let BgImg = '';
    switch (props.dataType) {
        case 'migration':
            BgImg = MigrationHeaderBg;
            break;
        case 'tourism':
            BgImg = TourismHeaderBg;
            break;
        default:
            BgImg = MainHeaderBg;
            break;
    };

    return BgImg;
};

const StyledHeader = styled.header`
    width: 100%;
    background: url(${ThemeBg}) no-repeat center center;
    background-size: cover;
    overflow: hidden;
    padding-bottom: 126px;

    @media screen and (max-width: 600px) {
        background-position: 60% center;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        background-position: 40% center;
    }
`;



const Header = (props) => {

    const { text, dataType, contentType, NavDisplay, handleClick, linkTo } = props;

    let HeaderContent = contentType => {
        switch (contentType) {
            case 'migration':
                return <MigrationHeaderContent handleClick={handleClick} text={text} linkTo={linkTo} />;
            case 'tourism':
                return <TourismHeaderContent handleClick={handleClick} text={text} linkTo={linkTo} />;
            default:
                return <MainHeaderContent text={text} handleClick={handleClick} />;
        };
    };
        
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <StyledHeader dataType={dataType}>
                <Nav dataType={dataType} NavDisplay={NavDisplay} />
                <Container>
                    { HeaderContent(contentType) }
                </Container>
            </StyledHeader>
        </ScrollAnimation>
    )
};

export default Header;