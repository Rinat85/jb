import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from './theme/globalStyle';
import Header from './components/Header';
import TourismMain from './components/TourismMain';
import Footer from './components/Footer';
import StickyMenus from './components/StickyMenus';
import MainModal from './components/MainModal';


const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Tourism = () => {

  const [ show, setShow ] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setShow({
      show: !show
    });
  }

  return (
    <>
        <GlobalStyle whiteColor />
        <AppWrapper>
            <div id="top"></div>
            <Header handleClick={handleClick} text={t("получить консультацию")} dataType="tourism" contentType="tourism" />
            <TourismMain handleClick={handleClick} />
            <Footer dataType="tourism" />
            <StickyMenus tourism />
            <MainModal handleClick={handleClick} show={show} />
            <div id="bottom"></div>
        </AppWrapper>
    </>
  );
}

export default Tourism;
