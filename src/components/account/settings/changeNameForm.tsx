import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/api/user'
import { useState } from 'react'


const schema = z.object({
    name: z.string().min(1, "El campo nombre es requerido"),
})

const userCtrl = new User()

export type schemaType = z.infer<typeof schema>

function ChangeNameForm() {

    const [isSuccess, setIsSuccess] = useState(false)
    const { user } = useAuth()

    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<schemaType>({
        resolver: zodResolver(schema)
    })

    const onSubmit = handleSubmit((data) => {
        userCtrl.updateMe(user.id, data)
        reset()
        setIsSuccess(true)

    })

    return (
        <>
            <form onSubmit={onSubmit} className="flex mb-5 w-full" >
                <fieldset className="mb-[15px] w-full flex items-center gap-5">
                    <label className="text-violet11 w-1/5 font-bold   text-left text-[15px]" htmlFor="name">
                        Nombre y apellidos
                    </label>
                    <input
                        {...register('name')}
                        className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-2/5 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="name"
                        placeholder={user.name}


                    />
                    <button type='submit' className=" bg-[#1e293b] text-white bg-green4 disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                        Enviar
                    </button>
                    {errors.name?.message && <p className='text-red-500 '>{errors.name?.message}</p>}
                </fieldset>
            </form>
            {
                isSuccess && (
                    <p className="text-green-500 text-center font-semibold mt-2">Cambios realizados con éxito</p>
                )
            }
        </>

    )
}

export default ChangeNameForm