import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: 960px){
        transition: .8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavbarLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    @media (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex;
    list-style: none;
    text-alight: center;
    margin-right: -22px;
    @media (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    position: relative;
    overflow: hidden;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    position: relative;
    transition: .3s ease-in;

    &:before{
        content: "";
        width: 100%;
        height: 3px;
        background: #01BF71;
        bottom: 0;
        left: 0;
        position: absolute;
        transform: translateX(-50px);
        opacity: 0;
        transition: .3s ease-in;
    }

    &:hover{
        color: #01BF71;
        &:before{
            opacity: 1;
            transform: translateX(0px);
        }
        
    }

    &.active:before{
        opacity: 1;
        transform: translateX(0px);
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 768px){
        display: none;
    }

`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: point;
    transition: .3s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all .2s ease-in-out;
    }
`



