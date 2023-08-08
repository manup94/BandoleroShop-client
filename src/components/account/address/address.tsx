import { use, useState } from 'react'
import AddressForm from './addressForm'
import BasicModal from '@/components/basicModal'


function Address(props: any) {
    console.log(props);
    const { addressId, address, onReload } = props
    const [showEdit, setShowEdit] = useState(false)

    const openCloseEdit = (value: boolean) => {
        setShowEdit(value)

    }


    return (
        <div className=' w-full justify-around ' >

            <div >
                <div >
                    <h2 className="font-bold">{address.title}:</h2>
                    <p>{address.name}, {address.address}, {address.state}, {address.city}, {address.postal_code}</p>
                </div>
            </div>
            <div  >
                <button onClick={openCloseEdit} className="bg-[#1e293b] ml-0 m-5 text-white disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    <img className='w-5 fill-white stroke-white' src="/images/edit.png" alt="edit" />
                </button>
                <button className="bg-[#FF0000]  text-white disabled:animate-pulse  text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    <img className='w-5' src="/images/delete.png" alt="delete" />
                </button>
            </div>

            <hr />

            <BasicModal show={showEdit} onOpenClose={openCloseEdit} title='Editar dirección'>
                <AddressForm onOpenClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address}></AddressForm>
            </BasicModal>
        </div >
    )
}

export default Address