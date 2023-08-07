import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/api/user'
import { useState } from 'react'


const schema = z.object({
    email: z.string().min(1, 'El campo email es requerido'),
    confirmEmail: z.string().min(1, 'El campo email es requerido')
})

const userCtrl = new User()

export type schemaType = z.infer<typeof schema>

function ChangeEmailForm() {

    const [isSuccess, setIsSuccess] = useState(false)
    const { user, updateUser } = useAuth()

    const { register,
        handleSubmit,
        formState: { errors },
        setError,
        reset }
        = useForm<schemaType>({
            resolver: zodResolver(schema)
        })


    const onSubmit = handleSubmit((data) => {

        if (data.email !== data.confirmEmail) {
            setError('confirmEmail', {
                type: 'manual',
                message: 'Los correos no coinciden',
            });

        } else {
            userCtrl.updateMe(user.id, data);
            updateUser('email', data.email);
            reset();
            setIsSuccess(true)
        }
    });

    return (


        <form onSubmit={onSubmit} className="flex flex-col w-full items-center gap-5 ">
            <div className="flex w-full  ">
                <label className="text-violet11 font-bold text-[15px] w-1/5 text-left mr-5" htmlFor="email">
                    Email
                </label>
                <input
                    {...register('email')}
                    className="text-violet11 w-2/5 shadow-violet7 focus:shadow-violet8 inline-flex   items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] h-[40px]"
                    id="email"
                    placeholder={user.email}

                />
                <button
                    type="submit"
                    className=" ml-5  bg-[#1e293b] text-white bg-green4 disabled:animate-pulse text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                    Enviar
                </button>
                {errors.email?.message && (
                    <p className="text-red-500 justify-center ml-5 ">{errors.email?.message}</p>
                )}


            </div>

            <div className="flex w-full  ">
                <label className="text-violet11 font-bold text-[15px] text-left w-1/5 mr-5" htmlFor="confirmEmail">
                    Repite email
                </label>
                <input
                    {...register('confirmEmail')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex  w-2/5 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] h-[40px]"
                    id="confirmEmail"
                    placeholder={user.email}

                />
                <div className='w-24'></div>
                {errors.confirmEmail?.message && (
                    <p className="text-red-500 justify-center ml-5">{errors.confirmEmail?.message}</p>
                )}
            </div>
            {isSuccess && (
                <p className="text-green-500 font-semibold mt-2">Cambios realizados con éxito</p>
            )}

        </form>

    )
}

export default ChangeEmailForm