'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import AuthDialog from './auth/dialog'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'



export default function Navigation() {
    const { logout, user } = useAuth()
    const { total } = useCart()
    const [isReady, setIsReady] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setIsReady(true)
    }, [])

    const onSearch = (event: any) => {
        const value = event.target.value;
        router.replace(`/search?s=${value}`)
    }

    const goToCart = () => {
        if (!user) {
            return
        } else {
            router.push('/cart?step=1')
        }
    }

    return (
        <nav className="navbar text-white p-5 md:p-5 flex flex-wrap  md:justify-between items-center bg-[#1e293b]">
            <div className='w-full md:w-1/3   text-center mb-3 md:mb-0'>
                <Link href={'/'}>
                    <img className='inline' src="/images/logo.png" alt="logo-icon" />
                </Link>
            </div>
            <div className='w-full md:w-1/3 flex justify-center mb-3 md:mb-0'>
                <form className="flex w-full md:w-auto">
                    <input
                        onSubmit={(event) => event.preventDefault()}
                        id='search-product'
                        onChange={onSearch}
                        type="text"
                        placeholder="Buscar..."
                        className="bg-white h-10 w-full md:w-80 rounded text-black outline-none py-1 px-2"
                    />
                    <img className='w-10 h-10 text-white p-1' src="/images/search.png" alt="search-bar" />
                </form>
            </div>
            <div className='w-full md:w-1/3 flex justify-between   md:justify-center'>
                {
                    user && isReady &&
                    <div className='ml-3  md:mr-10'>
                        <button className='flex items-center' onClick={goToCart}>
                            {total > 0 && <span className='mr-1 md:mr-2'>{total}</span>}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                                <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"></path>
                                <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"></path>
                            </svg>
                        </button>
                    </div>
                }
                <div className=' hover:cursor-pointer'>
                    {user && isReady ?
                        <Menu >
                            <MenuButton className='text-base mr-10 md:text-xl'>
                                Hola {user?.username}
                            </MenuButton>
                            <MenuList className='menu dropdown-content z-[2] rounded-box w-32 absolute top-full left-0 mt-1 invisible opacity-0 transition-all duration-200 bg-white'>
                                <MenuItem>
                                    <Link href={'/profile'} className='m-3 text-black font-bold'>Mi perfil</Link>
                                </MenuItem>
                                <hr />
                                <MenuItem>
                                    <button onClick={logout} className='m-3 text-black font-bold'>Cerrar sesión</button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        :
                        <AuthDialog />}
                </div>
            </div>
        </nav>
    )
}