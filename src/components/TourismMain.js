import React from 'react';
import styled from 'styled-components';

import TourismServices from './TourismServices';
import TourismWorksteps from './TourismWorksteps';
import TourismFeatures from './TourismFeatures';
import TourismTours from './TourismTours';
import TourismTestimonials from './TourismTestimonials';
import TourismStepper from './TourismStepper';
import TourismPartners from './TourismPartners';
import MapSection from './MapSection';



const StyledMain = styled.main`
    
`;

const Main = (props) => {

    const { handleClick } = props;

    return (
        <StyledMain>
            <TourismServices />
            <TourismWorksteps />
            <TourismFeatures handleClick={handleClick} />
            <TourismTours />
            <TourismTestimonials />
            <TourismStepper />
            <TourismPartners />
            <MapSection />
        </StyledMain> 
    );
};

export default Main;