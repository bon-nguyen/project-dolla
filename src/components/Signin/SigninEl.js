import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: gray;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    place-items: center;
    overflow: hidden;
    background: #01BF71;
`
export const FormWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
export const FormContent = styled.div`
    position: relative;
    width: 400px;
    height: 450px;
    border-radius: 20px;
    padding: 40px;
    box-sizing: border-box;
    background: #0c0c0c;

    @media (max-width: 480px){
        width: 320px;
        height: 400px;
        padding: 40px 20px;
    }

`
export const Icon = styled.h3`

`
export const Form = styled.form`
    text-align: left;
    margin-top: 30px;
`

export const FormH1 = styled.h1`
    margin-top: 10px;
    font-weight: 700;
    font-size: 1.25rem;
    color: #01BF71;
    letter-spacing: 1px;
`
export const FormLabel = styled.div`
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
`
export const FormInput = styled.input`
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 1rem;

`
export const FormButton = styled.button`
    margin-top: 20px;
    background: #01BF71;
    height: 40px;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 700;
    transition: .3s ease-in-out;
    border: none;
    width: 100%;
    &:hover{
        opacity: .8;
    }

`
export const FormBack = styled(LinkR)`
    color: #fff;
    margin-top: 1rem;
    text-decoration: none;
    display: block;
`
export const Text = styled.p`
    color: #fff;
    margin-top: 1rem;
    text-decoration: none;
    display: block;
`