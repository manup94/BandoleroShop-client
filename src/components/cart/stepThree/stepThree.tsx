
import { useRouter } from "next/navigation"

export default function StepThree() {


    const router = useRouter()


    return (
        <div className="p-10 m-5 container w-1/2 flex flex-col mx-auto align-middle text-center rounded-md border-black border-2 justify-center ">

            <img className="w-20 mx-auto" src="/images/checked.png" alt="sucess-icon" />
            <h2>!Compra exitosa!</h2>
            <button onClick={() => router.replace('/profile')} className="bg-[#1e293b]   p-2  mx-auto    hover:bg-blue-800 text-white font-bold py-2 rounded">
                Ver pedido
            </button>



        </div>
    )
}
