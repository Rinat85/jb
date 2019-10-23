import React from 'react';

import ServicesSection from './ServicesSection';
import WorkstepsSection from './WorkstepsSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactFormSection from './ContactFormSection';
import PartnersSection from './PartnersSection';
import MapSection from './MapSection';


const Main = (props) => {

    const { handleClick } = props;

    return (
        <>
            <ServicesSection />
            <WorkstepsSection />
            <FeaturesSection handleClick={handleClick} />
            <TestimonialsSection />
            <ContactFormSection />
            <PartnersSection />
            <MapSection />
        </> 
    );
};

export default Main;