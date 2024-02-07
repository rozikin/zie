'use client'
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { register } from 'module'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/products/Button'
import Link from 'next/link'
import { AiOutlineGoogle } from 'react-icons/ai'


const RegisterForm = () => {

    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true)
        console.log(data)
    }


    return (
        <>
            <Heading title="Sign Up for E-Shop" />
            <hr className='bg-slate-300 w-full h-px' />
            <Button outline label="Sign up with google" icon={AiOutlineGoogle} onClick={()=>{}} />
            <Input
                id="name"
                label="name"
                disabeld={isLoading}
                register={register}
                errors={errors}
                required

            />
            <Input
                id="email"
                label="Email"
                disabeld={isLoading}
                register={register}
                errors={errors}
                required

            />
            <Input
                id="password"
                label="Password"
                disabeld={isLoading}
                register={register}
                errors={errors}
                required
                type='password'

            />

            <Button label={isLoading ? "Loading" : "Sign Up"} onClick={handleSubmit(onSubmit)} />

            <p className='text-sm'>
                Already have an account? <Link className='underline' href="/login" >Log in</Link>
            </p>


        </>
    )
}

export default RegisterForm