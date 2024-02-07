'use client'
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { register } from 'module'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/products/Button'
import Link from 'next/link'
import { AiOutlineGoogle } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        signIn('credentials',{
            ...data,
            redirect: false
        }).then((callback)=>{
            setIsLoading(false)

            if (callback?.ok) {
                router.push('/cart')
                router.refresh();
                toast.success('Logged In')

            }

            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }


    return (
        <>
            <Heading title="Log in E-Shop" />
            <hr className='bg-slate-300 w-full h-px' />
            <Button outline label="Continue with google" icon={AiOutlineGoogle} onClick={()=>{}} />
      
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

            <Button label={isLoading ? "Loading" : "Login"} onClick={handleSubmit(onSubmit)} />

            <p className='text-sm'>
               Do not have an account? <Link className='underline' href="/register" >Sign Up</Link>
            </p>


        </>
    )
}

export default LoginForm