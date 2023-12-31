
import { ButtonHTMLAttributes, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

interface AddCartIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    productId: string;
    loading?: boolean;
}

export function AddCartIcon(props: AddCartIconProps) {
    const { user } = useAuth();
    const { productId, loading: externalLoading, ...rest } = props; // Extract loading from props
    const [loading, setLoading] = useState(false);
    const { addCart } = useCart();

    const addCartWrapper = () => {
        if (user) {
            setLoading(true);
            addCart(productId);

            setTimeout(() => {
                setLoading(false);
            }, 500);
        } else {
            return;
        }
    };

    return (
        <button {...rest} onClick={addCartWrapper} className={`bg-[#1e293b] w-4/5 hover:bg-blue-700 text-white font-bold py-2 rounded ${externalLoading ? 'cursor-not-allowed' : ''}`}>
            {loading ? (
                <svg className="animate-spin mx-auto w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                'Añadir al carrito'
            )}
        </button>
    );
}
