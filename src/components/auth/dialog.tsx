import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react';
import { LoginForm } from './login';
import { SignUpForm } from './signup';
import Image from 'next/image';


function AuthDialog() {
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const [open, setOpen] = useState(false)

    return (

        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                </svg>

            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <div className='justify-center flex' >
                        <Image src={'/../public/images/logo.png'} alt='logo' width={300} height={300}></Image>
                    </div>
                    {mode === 'login' && <LoginForm onSignUp={() => setMode('signup')} />}
                    {mode === 'signup' && <SignUpForm onLogin={() => setMode('login')} />}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >

    )
}

export default AuthDialog