import { useEffect } from "react";
import { useUser } from "./useUser";
import { useRouter } from "next/navigation";



export function usePrivatePage() {
    const token = useUser(state => state.token)
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push('/')
        }
    })
}