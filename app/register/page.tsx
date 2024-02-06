

import React from 'react'
import FormWrap from '../components/products/FormWrap'
import Container from '../components/Container'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <RegisterForm />
                </FormWrap>
            </Container>
        </div>
    )
}

export default Register