'use client'
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { register } from 'module'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form' 

const RegisterForm = () => {

    const [isLoading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password:''
        }
    })


    return (
        <div>
            <Heading title="Sign Up for E-Shop" />
            <hr className='bg-slate-300 w-full h-px' />
            <Input
                id="name"
                label="name"
                disabeld={isLoading}
                register={register}
                errors={errors}
                required

            />


        </div>
    )
}

export default RegisterForm