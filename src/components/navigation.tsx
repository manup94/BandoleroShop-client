'use client'
import Link from 'next/link'
import userIcon from '../../public/images/user.png'
import { useUser } from '@/hooks/useUser'
import AuthDialog from './auth/dialog'

const navigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Productos', href: '/products', current: false },
    { name: 'About', href: '/about', current: false }
]


export default function Navigation() {
    const isLoggedIn = useUser(state => state.loggedIn)
    return (
        <nav className="navbar text-white p-5 flex justify-between bg-[#1e293b]">
            <ul className='flex space-x-2 '>
                {
                    navigation.map(elm => {
                        return <li className='hover:underline'>
                            <Link href={elm.href}>{elm.name}</Link>
                        </li>
                    })
                }
            </ul>
            <ul className='flex space-x-5 '>
                <li>
                    {isLoggedIn ? "Hola Manuel" : <AuthDialog />}

                </li>
                <li>
                    <button onClick={() => { console.log('wefwef'); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                            <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"></path>
                            <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"></path>
                        </svg>

                    </button>
                </li>
            </ul>
        </nav >
    )
}