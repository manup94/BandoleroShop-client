'use client'
import { SignUp } from '@/api/auth/signup'
import { useUser } from '@/hooks/useUser'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const schema = z.object({
    username: z.string().min(1, "El campo username es requerido"),
    password: z.string().min(1, "El campo password es requerido"),
    email: z.string().min(1, 'El campo email es requerido'),
})

export type schemaType = z.infer<typeof schema>


export function SignUpForm({ onLogin, onOpen }: { onLogin: () => void; onOpen: () => void }) {
    const [isLoading, setLoading] = useState(false)
    const [isRegister, setIsRegister] = useState(false)


    const { register, handleSubmit, formState: { errors }, setError } = useForm<schemaType>({
        resolver: zodResolver(schema)
    })
    const onSubmit = handleSubmit((data) => {

        setLoading(true)
        SignUp({
            email: data.email,
            username: data.username,
            password: data.password
        })
            .finally(() => {
                setLoading(false)
                onOpen()
            })





    })

    return <>
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Registro
        </Dialog.Title>
        <form onSubmit={onSubmit}>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="username">
                    Usuario *
                </label>
                <input
                    {...register('username')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="username"
                    placeholder='Introduce tu usuario'
                />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="email">
                    Email *
                </label>
                <input
                    {...register('email')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="email"
                    placeholder='Introduce tu email'
                />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="password">
                    Contraseña *
                </label>
                <input
                    {...register('password')}
                    type='password'
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="password"
                    placeholder='Introduce tu contraseña'
                />
            </fieldset>
            {errors.username?.message && <p className='text-red-500'>{errors.username?.message}</p>}
            {errors.password?.message && <p className='text-red-500'>{errors.password?.message}</p>}
            {errors.email?.message && <p className='text-red-500'>{errors.email?.message}</p>}

            <div className="mt-[25px] flex justify-end">


                <button type='submit' disabled={isLoading} className="bg-green4 disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    {isLoading ?
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :
                        'Registrarme'
                    }
                </button>


            </div>
            <Dialog.Close asChild>
                <button onClick={onLogin}
                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                >
                    <Cross2Icon />
                </button>
            </Dialog.Close>
        </form ></>
}