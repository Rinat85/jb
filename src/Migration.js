import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import MigrationMain from './components/MigrationMain';
import Footer from './components/Footer';
import StickyMenus from './components/StickyMenus';
import MainModal from './components/MainModal';


const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Migration = () => {

  const [ show, setShow ] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setShow({
      show: !show
    });
  }
  
  return (
    <React.Fragment>
      <AppWrapper>
        <div id="top"></div>
        <Header text={t("получить консультацию")} handleClick={handleClick} dataType="migration" contentType="migration" linkTo="#!" />
        <MigrationMain handleClick={handleClick} />
        <Footer dataType="migration" />
        <StickyMenus />
        <MainModal handleClick={handleClick} show={show} />
        <div id="bottom"></div>
      </AppWrapper>
    </React.Fragment>
  );
}

export default Migration;
