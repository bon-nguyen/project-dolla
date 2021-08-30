import React from 'react';
import { ServicesCar, SerVicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesEl';

import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-3.svg';
const Services = () => {
    return (
        <>
            <SerVicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCar>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reducer your fess and increase your overall revenue </ServicesP>
                    </ServicesCar>

                    <ServicesCar>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>We help reducer your fess and increase your overall revenue</ServicesP>
                    </ServicesCar>

                    <ServicesCar>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cash backs.</ServicesP>
                    </ServicesCar>
                </ServicesWrapper>
            </SerVicesContainer>
        </>
    );
};

export default Services;