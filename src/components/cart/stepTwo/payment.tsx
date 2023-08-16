import { CardElement } from '@stripe/react-stripe-js'

export default function Payment() {

    const cardStyle = {}

    return (
        <div>
            <h2 className='mb-3'>Métodos de pago</h2>
            <div className='p-10 rounded-md border-black border-2'>
                <CardElement options={cardStyle} />
            </div>
        </div>
    )
}
