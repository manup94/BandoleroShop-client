'use client'
import Info from "@/components/account/info"
import Tabs from "@/components/account/tabs"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from 'next/navigation'

function ProfilePage() {

    const { user } = useAuth()
    const router = useRouter()

    if (!user) {
        router.push('/')
        return null
    }

    return (

        <section className="justify-center">
            <Info />
            <Tabs />

        </section>

    )
}

export default ProfilePage

