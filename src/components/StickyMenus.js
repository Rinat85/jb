import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faComment, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const StyledSocial = styled.ul`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 5vw;
    bottom: 3vh;
    z-index: 102;

    li a {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 8px 0;
    font-size: 15px;
    line-height: 36px;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    }

    @media screen and (max-width: 1200px) {
        bottom: 7vh;
    }  
`;

const StyledMessage = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 5vw;
  bottom: 3vh;
  z-index: 102;

  li a:nth-child(1) {
    display: block;
    width: 60px;
    height: 60px;
    margin: 16px 0;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background-color: #9e1a38;
    box-shadow: 0px 0px 19px 0px rgba(161,26,57,1);
  }

  li a:nth-child(2) {
    display: block;
    width: 60px;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #9e1a38;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 1200px) {
      bottom: 7vh;
  }
`;

const StickyMenus = () => {
    return (
        <React.Fragment>
            <StyledSocial>
                <li>
                    <a href="https://www.facebook.com/" title="facebook">
                        <FontAwesomeIcon icon={faFacebookF} color="white" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jb_world_company/" title="instagram">
                        <FontAwesomeIcon icon={faInstagram} color="white" />
                    </a>
                </li>
                <li>
                    <a href=" https://t.me/jbtravel" title="telegram">
                        <FontAwesomeIcon icon={faTelegramPlane} color="white" />
                    </a>
                </li>
            </StyledSocial>
            <StyledMessage>
                <li>
                    <a href="#!" title="Напишите нам">
                        <FontAwesomeIcon icon={faComment} color="rgba(0, 0, 0, 0.3)" />
                    </a>
                    <a href="#bottom" title="Вниз">
                        <FontAwesomeIcon icon={faChevronDown} color="white" />
                    </a>
                </li>
            </StyledMessage>
        </React.Fragment>
    )
};

export default StickyMenus;