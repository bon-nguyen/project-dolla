import React, { useState } from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroEl';
import Video from '../../videos/video.mp4';
import { Button } from '../Button/ButtonEl';

const Hero = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = ()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Make Easy</HeroH1>
                <HeroP>Sign up for a new account today receive $250 in credit toward your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
