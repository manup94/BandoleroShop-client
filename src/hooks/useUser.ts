import { StateCreator, create } from "zustand";
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'


type State = {
    token: string | null;
    username: string | null;
    setToken: (newToken: string | null) => void;
    setUsername: (newUsername: string | null) => void;
};

type Persist = (
    config: StateCreator<State>,
    options: PersistOptions<State>
) => StateCreator<State>;

const persistState = typeof window !== 'undefined' ? localStorage.getItem('auth-storage') : null

export const useUser = create<State>(
    (persist as unknown as Persist)(
        (set) => ({
            token: persistState ? JSON.parse(persistState).token : null,
            username: persistState ? JSON.parse(persistState).username : null,
            setToken: (token) => set({ token }),
            setUsername: (username) => set({ username }),
        }
        ),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

