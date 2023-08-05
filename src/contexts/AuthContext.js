'use client'
import { createContext, useState, useEffect } from "react";
import { Token } from "@/api/token"
import { User } from "@/api/user";

const tokenCtrl = new Token()
const userCtrl = new User()
export const AuthContext = createContext()

export function AuthProvider(props) {

    const { children } = props
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken()
            if (!token) {
                logout()
                setLoading(false)
                return
            }
            if (tokenCtrl.hasExpired(token)) {
                logout()
            } else {
                await login(token)
            }
        })()

    }, [])

    const login = async (token) => {
        try {


            tokenCtrl.setToken(token)
            const response = await userCtrl.getMe()
            console.log(response);
            setUser(response)
            setToken(token)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const logout = () => {
        tokenCtrl.removeToken()
        setToken(null)
        setUser(null)
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser: null
    }

    if (loading) return null

    return (
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}