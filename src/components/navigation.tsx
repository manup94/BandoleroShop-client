'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import AuthDialog from './auth/dialog'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/navigation'


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'


const navigation = [
    { name: 'Inicio', href: '/', current: false }

]

export default function Navigation() {
    const { logout, user } = useAuth()
    const [isReady, setIsReady] = useState(false)
    const total = 5
    const router = useRouter()

    useEffect(() => {
        setIsReady(true)

    }, [])

    const onSearch = (event: any) => {

        const value = event.target.value;
        router.replace(`/search?s=${value}`)
        console.log(value);
    }

    const goToCart = () => {
        if (!user) {

            router.push('/about')
        }
        else {

            router.push('/cart')
        }
    }


    return (
        <nav className="navbar text-white p-5 flex justify-between bg-[#1e293b]">
            <ul className='flex space-x-2 '>
                {
                    navigation.map(elm => {
                        return <li className='hover:underline' key={navigation.indexOf(elm)}>
                            <Link href={elm.href}>{elm.name}</Link>
                        </li>
                    })
                }
            </ul>
            <ul className='flex space-x-5'>
                <li className='mr-10'>
                    <form className="flex items-center">
                        <input
                            onSubmit={(event) => event.preventDefault()}
                            id='search-product'
                            onChange={onSearch}
                            type="text"
                            placeholder="Buscar..."
                            className="bg-white text-black outline-none  py-1 px-2"
                        />
                        <img className='w-8   bg-purple-500 text-white p-1 ' src="/images/search.png" alt="search-bar" />
                    </form>
                </li>
                <li className='hover:cursor-pointer'>
                    {user && isReady ?
                        <Menu>
                            <MenuButton >
                                Hola {user?.username}
                            </MenuButton>
                            <MenuList className='"p-5 rounded-md shadow menu dropdown-content z-[2] rounded-box w-52 absolute top-full left-0 mt-1 invisible opacity-0 transition-all duration-300 bg-gradient-to-r from-[#1e293b] to-purple-500"' >
                                <MenuItem  >
                                    <Link href={'/profile'} className='m-3'>Mi perfil</Link>
                                </MenuItem>
                                <MenuItem >
                                    <button onClick={logout} className='m-3'>Cerrar sesión</button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        :
                        <AuthDialog />}

                </li>

                {
                    user && isReady ?
                        <li>


                            <button className='flex' onClick={goToCart}>
                                {total > 0 && <span >{total}</span>}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                                    <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"></path>
                                    <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"></path>
                                </svg>
                            </button>

                        </li>
                        :
                        ' '

                }

            </ul>
        </nav >
    )
}