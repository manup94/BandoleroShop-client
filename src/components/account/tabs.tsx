'use client'
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChangeNameForm from "./settings/changeNameForm";
import ChangeEmailForm from "./settings/changeEmailForm";
import ChangePasswordForm from "./settings/changePasswordForm";
import AddAddress from "./address/addAddress";
import ListAddresses from "./address/listAddresses";

function Tabs() {

    const router = useRouter()
    const { logout } = useAuth()
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    const onLogout = () => {
        logout()
        router.push('/')

    }

    const tabData = [
        { title: 'Mis pedidos', content: 'Contenido de la pestaña 1' },
        { title: 'Lista de deseos', content: 'Contenido de la pestaña 2' },
        {
            title: 'Direcciones', content: <div className="p-10 flex w-full justify-between   ">
                <ListAddresses />
                <AddAddress />
            </div>
        },
        {
            title: 'Ajustes', content: <div className="p-10  ">
                <ChangeNameForm />
                <hr className="mb-7 mt-7" />
                <ChangeEmailForm />
                <hr className="mb-7 mt-7"></hr>
                <ChangePasswordForm />
            </div>
        }

    ];


    return (
        <div className="tabs">
            <ul className="flex border-b">
                {tabData.map((tab, index) => (
                    <li key={index} className="-mb-px mr-1">
                        <a
                            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold ${activeTab === index
                                ? 'text-blue-900'
                                : 'text-blue-500 hover:text-blue-800 cursor-pointer'
                                }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </a>
                    </li>
                ))}
                <button onClick={onLogout}>
                    <img className="ml-3 w-5" src="./images/logout.png" alt="logout" />
                </button>
            </ul>

            <div className="p-4">
                {tabData.map((tab, index) => (
                    <div key={index} className={activeTab === index ? '' : 'hidden'}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Tabs