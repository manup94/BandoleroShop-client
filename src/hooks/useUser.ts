// import { StateCreator, create } from "zustand";
// import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
// import { User } from "@/app/types/user";

// type State = {
//     token: string | null;
//     user: User | null;
//     setToken: (newToken: string | null) => void;
//     setUser: (newUser: string | null) => void;
// };

// type Persist = (
//     config: StateCreator<State>,
//     options: PersistOptions<State>
// ) => StateCreator<State>;

// const persistState = typeof window !== 'undefined' ? localStorage.getItem('auth-storage') : null

// export const useUser = create<State>(
//     (persist as unknown as Persist)(
//         (set) => ({
//             token: persistState ? JSON.parse(persistState).token : null,
//             user: persistState ? JSON.parse(persistState).user : null,
//             setToken: (token) => set({ token }),
//             setUser: (user) => set({ user }),
//         }
//         ),
//         {
//             name: 'auth-storage',
//             storage: createJSONStorage(() => localStorage),
//         }
//     )
// )

// if (typeof window !== 'undefined') {
//     window.addEventListener('storage', (event) => {
//         if (event.key === 'auth-storage' && event.newValue === null) {
//             useUser.setState({ token: null });
//         }
//     });
// }

