import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/api/user'



const schema = z.object({
    password: z.string().min(1, 'El campo contraseña es requerido'),
    confirmPassword: z.string().min(1, 'El campo contraseña es requerido')
})

const userCtrl = new User()

export type schemaType = z.infer<typeof schema>

function ChangePasswordForm() {


    const { user, logout, updateUser } = useAuth()

    const { register,
        handleSubmit,
        formState: { errors },
        setError }
        = useForm<schemaType>({
            resolver: zodResolver(schema)
        })


    const onSubmit = handleSubmit((data) => {
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Las contraseñas no coinciden',
            });
        } else {
            userCtrl.updateMe(user.id, data);
            updateUser('password', data.password);
            logout()
        }
    });

    return (


        <form onSubmit={onSubmit} className="flex flex-col w-full items-center gap-5 ">
            <div className="flex w-full  ">
                <label className="text-violet11 font-bold text-[15px] w-1/5 text-left mr-5" htmlFor="password">
                    Contraseña
                </label>
                <input
                    {...register('password')}
                    className="text-violet11 w-2/5 shadow-violet7 focus:shadow-violet8 inline-flex   items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] h-[40px]"
                    id="password"
                    placeholder='Nueva contraseña'
                    type='password'
                />
                <button
                    type="submit"
                    className=" ml-5  bg-[#1e293b] text-white bg-green4 disabled:animate-pulse text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                    Enviar
                </button>
                {errors.password?.message && (
                    <p className="text-red-500 justify-center ml-5 ">{errors.password?.message}</p>
                )}
            </div>

            <div className="flex w-full  ">
                <label className="text-violet11 font-bold text-[15px] text-left w-1/5 mr-5" htmlFor="confirmPassword">
                    Repite contraseña
                </label>
                <input
                    {...register('confirmPassword')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex  w-2/5 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] h-[40px]"
                    id="confirmPassword"
                    placeholder='Nueva contraseña'
                    type='password'

                />
                <div className='w-24'></div>
                {errors.confirmPassword?.message && (
                    <p className="text-red-500 justify-center ml-5">{errors.confirmPassword?.message}</p>
                )}
            </div>

        </form>

    )
}

export default ChangePasswordForm