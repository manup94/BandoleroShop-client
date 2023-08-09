import { useRouter } from "next/navigation"

export default function Pagination(props: any) {

    const { totalPages, changePage } = props

    const router = useRouter()
    let newActualPage = 1

    const renderPageLinks = () => {
        const links = [];


        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <a
                    onClick={() => changePage(i)}
                    key={i}
                    href="#"
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-[#1e293b] hover:text-white"
                >
                    {i}
                </a>
            );
        }

        return links;
    };



    return (
        <div className="flex mb-5 items-center space-x-1">
            <a
                href="#"
                onClick={() => {
                    if (newActualPage < totalPages) {
                        newActualPage--
                        changePage(newActualPage)
                        console.log('pagina es', newActualPage)
                    }
                }}
                className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                Anterior
            </a>

            {renderPageLinks()}

            <a
                href="#"
                onClick={() => {
                    if (newActualPage < totalPages) {
                        newActualPage++
                        changePage(newActualPage)
                        console.log('pagina es', newActualPage)
                    }

                }}
                className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-[#1e293b] hover:text-white">
                Siguiente
            </a>
        </div>
    )
}
