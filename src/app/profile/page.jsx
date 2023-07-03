'use client'
import { usePrivatePage } from "@/hooks/usePrivatePages"

async function ProfilePage() {
    usePrivatePage()

    return (

        <>
            <h1>tu perfil</h1>
        </>

    )
}

export default ProfilePage

