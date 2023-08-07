import BasicModal from '@/components/basicModal'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import AddressForm from './addressForm'


function AddAddress() {

    const [show, setShow] = useState(false)

    const onOpenClose = (value: boolean) => {
        setShow(value)
    }

    return (
        <div className=' d-block'>

            <BasicModal show={show} onOpenClose={onOpenClose} >

                <AddressForm onOpenClose={onOpenClose} />

            </BasicModal>

        </div >
    )
}

export default AddAddress