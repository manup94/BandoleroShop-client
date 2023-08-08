
export default function BarTrust() {
    return (

        <div className="flex p-10 justify-center bg-black text-white">
            <article className="flex items-center">
                <img className="w-12 mr-4" src="/images/fast-delivery.png" alt="fast" />
                <div>
                    <h2 className="font-bold">Super rápido</h2>
                    <p>Entrega en 24/48 horas</p>
                </div>
            </article>
            <article className="flex items-center ml-5">
                <img className="w-12 mr-4" src="/images/verified.png" alt="secure" />
                <div>
                    <h2 className="font-bold">Fiable y seguro</h2>
                    <p>Más de 10000 productos</p>
                </div>
            </article>
            <article className="flex items-center ml-5">
                <img className="w-12 mr-4" src="/images/technical-support.png" alt="client-protect" />
                <div>
                    <h2 className="font-bold">Atención al cliente</h2>
                    <p>Agente disponible 24/7</p>
                </div>
            </article>
        </div>
    )
}
