import React from 'react';
import styled from 'styled-components';

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

const SectionHeader = ({text, color, subcolor}) => {
    return (
        <StyledSectionHeader color={color} subcolor={subcolor}>
            {text}
        </StyledSectionHeader>
    )
};

export default SectionHeader;