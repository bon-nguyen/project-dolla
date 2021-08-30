import React from 'react';

import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, Text, FormBack, FormWrap } from './SigninEl';

const SignIn = () => {
    return (
        <>
            <Container>
                    
                    <FormContent>
                        <FormH1>Sign in to your account</FormH1>
                        <Form action="#">
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' placeholder='Enter for email' required/>
                            <FormLabel htmlFor='password'>Email</FormLabel>
                            <FormInput type='password' placeholder="Enter for password" required/>
                            <FormButton type="submit">Continue</FormButton>
                        </Form>
                        <FormWrap>
                            <FormBack to='/'>BackToHome</FormBack>
                            <Text>Forgot password</Text>
                        </FormWrap>
                    </FormContent>
  
            </Container>
        </>
    );
};

export default SignIn;