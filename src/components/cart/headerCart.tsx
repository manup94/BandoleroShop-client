
import Link from "next/link";

export default function HeaderCart(props) {

    const { currentStep } = props

    return (
        <div className="bg-black  md:flex hidden  justify-center items-center text-white  p-5 align-middle z-5">

            <div className="mx-auto  flex justify-center">
                <div className="flex justify-center items-center" key={1}>
                    <span className={`flex  mr-5 border-4  justify-center align-middle items-center ${currentStep >= 1 ? 'border-[#00f700]' : 'border-[#374150]'}  rounded-full h-9 w-9`} >
                        <img className={`w-5  ${currentStep >= 2 ? '' : 'hidden'}`} src="/images/check.png" alt="check-logo" />
                        <span className={`${currentStep >= 2 ? 'hidden' : ''}`}>1</span>
                    </span>
                    <span>Cesta</span>
                    <span className="w-24 h-1 ml-2 mr-2  bg-[#374150] "></span>
                </div>
                <div className="flex justify-center items-center" key={2}>
                    <span className={`flex  mr-5 border-4  justify-center align-middle items-center ${currentStep >= 2 ? 'border-[#00f700]' : 'border-[#374150]'}  rounded-full h-9 w-9`} >
                        <img className={`w-5  ${currentStep >= 3 ? '' : 'hidden'}`} src="/images/check.png" alt="check-logo" />
                        <span className={`${currentStep >= 3 ? 'hidden' : ''}`}>2</span>
                    </span>
                    <span>Pago</span>
                    <span className="w-24 h-1 ml-2 mr-2  bg-[#374150] "></span>
                </div>
                <div className="flex justify-center items-center" key={3}>
                    <span className={`flex  mr-5 border-4  justify-center align-middle items-center ${currentStep >= 3 ? 'border-[#00f700]' : 'border-[#374150]'} rounded-full h-9 w-9`} >
                        <img className={`w-5 ${currentStep >= 3 ? '' : 'hidden'}`} src="/images/check.png" alt="check-logo" />
                        <span className={`${currentStep >= 3 ? 'hidden' : ''}`}>3</span>
                    </span>
                    <span>Confirmación</span>
                </div>
            </div>
            <div className="w-1/6 flex items-center justify-end align-middle">
                <img className="w-4 h-4 mr-2" src="/images/lock.png" alt="lock-icon" />
                <span className="w-0.5 h-20 m-5  bg-[#374150]" ></span>
                <div className="flex-col justify-start align-middle ">
                    <span className="flex ">Pago seguro</span>
                    <span >256-bit SSL Secure</span>
                </div>
            </div>
        </div>
    )
}