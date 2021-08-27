import React from 'react';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarEl';
import { FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to='/'>Dolla</NavbarLogo>
                    <MobileIcon onClick= {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Login</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;