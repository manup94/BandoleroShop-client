import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

function BasicModal(props: any) {

    const { children, show, onOpenClose, title } = props
    return (
        <Dialog.Root open={show} onOpenChange={onOpenClose} >
            <Dialog.Trigger asChild>

            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <h2 className='font-bold m-5'>{title}</h2>
                    {children}
                    <Dialog.Close asChild>
                        <button onClick={onOpenClose}
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full  focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    )
}

export default BasicModal