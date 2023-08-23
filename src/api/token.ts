import { ENV } from "@/utils/constants"
import jwtDecode from 'jwt-decode'


export class Token {
    setToken(token: any) {
        localStorage.setItem(`${ENV.TOKEN}`, token)
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN)
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN)
    }

    // hasExpired(token: any) {
    //     const tokenDecode = jwtDecode(token)
    //     const expireDate = tokenDecode.exp * 1000
    //     const currentDate = new Date().getTime()

    //     if (currentDate > expireDate) {
    //         return true
    //     }
    //     return false
    // }
    hasExpired(token: any) {
        const tokenDecode = jwtDecode(token);

        if (typeof tokenDecode === 'object' && 'exp' in tokenDecode) {
            const expireDate = (tokenDecode as { exp: number }).exp * 1000;
            const currentDate = new Date().getTime();

            return currentDate > expireDate;
        }

        return false;
    }
}