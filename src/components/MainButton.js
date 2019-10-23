import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMainButton = styled.button`
    display: block;
    width: 361px;
    height: 56px;
    margin: ${props => props.margin};
    background-color: #a11a39;
    text-align: center;
    transform: skewX(-15deg);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    align-self: center;

    :hover {
        box-shadow: 0px 0px 19px 0px rgba(161,26,57,1);
        transform: skewX(-15deg) scale(1.1);
    }

    @media screen and (max-width: 600px) {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const StyledMainButtonLink = styled.span`
    display: table-cell;
    height: inherit;
    width: inherit;
    vertical-align: middle;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    transform: skewX(15deg);

    @media screen and (max-width: 600px) {
        font-size: 14px;
        text-align: center;
        line-height: 56px;
    }
`;

const MainButton = (props) => {

    const { margin, text, handleClick, linkTo } = props;
    const linkAdr = linkTo || '#!';

    return (
        <Link to={linkAdr}>
            <StyledMainButton onClick={handleClick} margin={margin}>
                <StyledMainButtonLink>{text}</StyledMainButtonLink>
            </StyledMainButton>
        </Link>
    )
};

export default MainButton;