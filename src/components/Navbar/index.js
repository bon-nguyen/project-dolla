import React, { useEffect, useState } from 'react';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarEl';
import { FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import * as Scroll from 'react-scroll';
let scroll    = Scroll.animateScroll;
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeScrollNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeScrollNav);
    },[]);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo to='/' onClick={toggleHome}>Dolla</NavbarLogo>
                    <MobileIcon onClick= {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
            
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='discover'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={0}
              
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={0}
           
                            >Signin</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Login</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;