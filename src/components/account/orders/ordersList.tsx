import { DateTime } from "luxon"


export default function OrdersList(props: any) {

    const { order } = props


    const createdAt = new Date(order.attributes.createdAt).toISOString()
    const products = order.attributes.products

    const getTotalProducts = () => {
        let total = 0
        products.forEach(product => {
            total += product.quantity
        });
        return total
    }

    return (


        <div className="flex justify-between">
            <div className=" ">
                <p>{DateTime.fromISO(createdAt, { locale: 'es' }).toFormat('dd/MM/yyyy')}</p>
                <p>{getTotalProducts()} productos</p>
            </div>
            <div>
                <p>{order.attributes.totalPayment}€</p>
            </div>
        </div>

    )
}
