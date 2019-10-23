import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledFooter = styled.footer`
    background: rgba(160,26,56,1);
    background: linear-gradient(to right, rgba(160,26,56,1) 0%, rgba(28,27,23,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a01a38', endColorstr='#1c1b17', GradientType=1 );
`;

const StyledCopyright = styled.div`
    width: 100%;
    height: 50px;

    p {
        font-size: 14px;
        font-family: 'GothamPro-Light';
        color: white;
        line-height: 50px;
        text-align: center;
    }
`;

const Footer = (props) => {
    const { dataType, NavDisplay } = props;
    return (
        <StyledFooter id="footer">
            <Nav dataType={dataType} NavDisplay={NavDisplay} />
            <StyledCopyright>
                <p>© 2019 World Company</p>
            </StyledCopyright>
        </StyledFooter>
    )
};

export default Footer;