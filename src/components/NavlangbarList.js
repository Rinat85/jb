import React from 'react';
import styled from 'styled-components';

const StyledLangbar = styled.a`
    display: flex;
    align-items: middle;
    color: white;
    font-size: 14px;
    padding: 0 16px;

    i {
        display: inline-block;
        width: 24px;
        height: 16px;
        background: url('../img/${ props => props.dataFlag }.svg') no-repeat center center;
        background-size: cover;
        margin: 0 7px 0 10px;
    }

    span {
        color: white;
    }

    @media screen and (max-width: 600px) {
        color: #2d2d2d;

        span {
            color: #2d2d2d;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        color: #2d2d2d;

        span {
            color: #2d2d2d;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1023px) {
        font-size: 12px;
    }

`;

const NavlangbarList = () => {
    return (
        <StyledLangbar href="#!" dataFlag="ru-flag">
            RU<i></i><span>&#9013;</span>
        </StyledLangbar>
    );
};

export default NavlangbarList;