
export default function Newsletter() {
    return (
        <div className="flex flex-col p-12 w-180 bg-[#f1f1f1]  items-center justify-center">

            <h2 className="mb-4 font-bold">Subscríbete a la Newsletter</h2>

            <div className="flex items-center">
                <form className="flex justify-center align-middle bg-black" action="#">
                    <input className="border-none outline-none h-10 p-5 mr-3 " type="email" placeholder="Correo" />
                    <button className="w-10" type="submit">
                        <img className="w-7" src="images/arrow.png" alt="arrow" />
                    </button>
                </form>
            </div>

            <p className="mt-4">Mantente informado de todas las novedades</p>
        </div>
    )
}
