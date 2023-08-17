
export default function BarTrust() {
    return (
        <div className="flex flex-col md:flex-row p-4 md:p-10 justify-around bg-black text-white">
            <article className="flex items-center justify-center mb-4 md:mb-0">
                <img className="w-12 md:w-16 mr-4" src="/images/fast-delivery.png" alt="fast" />
                <div>
                    <h2 className="font-bold text-sm md:text-base">Super rápido</h2>
                    <p className="text-xs md:text-sm">Entrega en 24/48 horas</p>
                </div>
            </article>
            <article className="flex items-center justify-center mb-4 md:mb-0">
                <img className="w-12 md:w-16 mr-4" src="/images/verified.png" alt="secure" />
                <div>
                    <h2 className="font-bold text-sm md:text-base">Fiable y seguro</h2>
                    <p className="text-xs md:text-sm">Más de 10000 productos</p>
                </div>
            </article>
            <article className="flex items-center justify-center">
                <img className="w-12 md:w-16 mr-4" src="/images/technical-support.png" alt="client-protect" />
                <div>
                    <h2 className="font-bold text-sm md:text-base">Atención al cliente</h2>
                    <p className="text-xs md:text-sm">Agente disponible 24/7</p>
                </div>
            </article>
        </div>


    )
}
