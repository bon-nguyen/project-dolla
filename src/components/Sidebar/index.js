import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper,SidebarLink , SidebarMenu, SidebarBtnWrap, SidebarRoute } from './SidebarEl';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;