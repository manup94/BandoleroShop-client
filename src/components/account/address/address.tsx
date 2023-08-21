import { useState } from 'react'
import AddressForm from './addressForm'
import BasicModal from '@/components/basicModal'
import ConfirmModal from '@/components/confirmModal'
import { Address as AddressCtrl } from '@/api/address'

const addressCtrl = new AddressCtrl()

function Address(props: any) {

    const { addressId, address, onReload } = props
    const [showEdit, setShowEdit] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false);

    const openCloseEdit = (value: boolean) => {
        setShowEdit(value)
    }

    const handleConfirm = () => {
        onDelete()
        setShowConfirm(false)
    };

    const handleCancel = () => {
        setShowConfirm(false)
    };

    const onDelete = async () => {
        try {
            addressCtrl.delete(addressId)
            onReload()
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className='w-full mx-auto justify-around'>
            <div className="p-4">
                <h2 className="font-bold">{address.title}:</h2>
                <p>{address.name}, {address.address}, {address.state}, {address.city}, {address.postal_code}</p>
            </div>
            <div className="flex justify-between p-4">
                <button
                    onClick={openCloseEdit}
                    className="bg-[#1e293b] text-white disabled:animate-pulse text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                    <img className='w-5 fill-white stroke-white' src="/images/edit.png" alt="edit" />
                </button>
                <button
                    onClick={() => setShowConfirm(true)}
                    className="bg-[#FF0000] text-white disabled:animate-pulse text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none ml-3"
                >
                    <img className='w-5' src="/images/delete.png" alt="delete" />
                </button>
            </div>
            <hr />
            {showConfirm && (
                <ConfirmModal message={'¿Seguro que la deseas eliminar?'} onConfirm={handleConfirm} onCancel={handleCancel} />
            )}
            <BasicModal show={showEdit} onOpenClose={openCloseEdit} title='Editar dirección'>
                <AddressForm onOpenClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address} />
            </BasicModal>
        </div>

    )
}

export default Address