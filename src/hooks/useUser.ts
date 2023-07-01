import { create } from "zustand";

type State = {
    loggedIn: boolean
    setLoggedIn: (newValue: boolean) => void
}

export const useUser = create<State>((set) => ({
    loggedIn: false,
    setLoggedIn: (loggedIn) => set({ loggedIn })
}))