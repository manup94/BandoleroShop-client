import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAuth } from "@/hooks/useAuth"
import { Address } from "@/api/address"


const schema = z.object({
    title: z.string().min(1, "El titulo requerido"),
    name: z.string().min(1, "El nombre es requerido"),
    address: z.string().min(1, "la direccion es requerida"),
    state: z.string().min(1, 'El pais es requerido'),
    city: z.string().min(1, 'La ciudad es requerida'),
    postal_code: z.string().min(1, 'El numero postal es requerido'),
    phone: z.string().min(1, 'El telefono es requerido'),
})

export type schemaType = z.infer<typeof schema>

const addressCtrl = new Address()

function AddressForm(props: any) {
    const { onOpenClose, onReload, addressId, address } = props
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, setError } = useForm<schemaType>({
        resolver: zodResolver(schema)
    })

    const onSubmit = handleSubmit((data) => {
        if (addressId) {
            //NO PILLLA EL CONSOLELOG!!!!!!!!
            console.log('actualizae');
        } else {
            addressCtrl.create(data, user.id)
        }
        onReload()
        onOpenClose(false)
    })

    return (
        <form onSubmit={onSubmit}>


            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="title">
                    Titulo *
                </label>
                <input
                    {...register('title')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="title"
                    placeholder='Introduce el titulo'
                />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="name">
                    Nombre completo *
                </label>
                <input
                    {...register('name')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    placeholder='Introduce tu nombre completo'
                />
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="address">
                    Direccion *
                </label>
                <input
                    {...register('address')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="address"
                    placeholder='Introduce tu dirección'
                />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11  w-[90px] text-right text-[15px]" htmlFor="state">
                    Pais *
                </label>
                <input
                    {...register('state')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="state"
                    placeholder='Introduce tu pais'
                />
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="city">
                    Ciudad *
                </label>
                <input
                    {...register('city')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="city"
                    placeholder='Introduce tu ciudad'
                />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="postal_code">
                    Codigo postal *
                </label>
                <input
                    {...register('postal_code')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="postal_code"
                    placeholder='Introduce tu codigo postal'
                />
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="phone">
                    Telefono *
                </label>
                <input
                    {...register('phone')}
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="phone"
                    placeholder='Introduce tu numero de telefono'
                />
            </fieldset>
            {errors.title?.message && <p className='text-red-500'>{errors.title?.message}</p>}
            {errors.name?.message && <p className='text-red-500'>{errors.name?.message}</p>}
            {errors.address?.message && <p className='text-red-500'>{errors.address?.message}</p>}
            {errors.state?.message && <p className='text-red-500'>{errors.state?.message}</p>}
            {errors.city?.message && <p className='text-red-500'>{errors.city?.message}</p>}
            {errors.postal_code?.message && <p className='text-red-500'>{errors.postal_code?.message}</p>}
            {errors.phone?.message && <p className='text-red-500'>{errors.phone?.message}</p>}

            <div className="mt-[25px] flex justify-end">


                <button type='submit' className="bg-[#1e293b] text-white disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">

                    Registrar dirección

                </button>


            </div>

        </form >
    )
}

export default AddressForm