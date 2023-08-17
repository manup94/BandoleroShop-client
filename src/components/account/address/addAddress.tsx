import BasicModal from '@/components/basicModal'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import AddressForm from './addressForm'


function AddAddress(props: any) {

    const { onReload } = props
    const [show, setShow] = useState(false)

    const onOpenClose = (value: any) => {
        setShow(value)
    }

    return (
        <div className=' mx-auto'>

            <BasicModal show={show} onOpenClose={onOpenClose} title='Crear nueva dirección' >

                <AddressForm onOpenClose={onOpenClose} onReload={onReload} />

            </BasicModal>

            <button onClick={onOpenClose} className=" bg-[#1e293b] text-white bg-green4 disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">crear</button>

        </div >
    )
}

export default AddAddress