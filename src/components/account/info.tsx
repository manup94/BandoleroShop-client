import { DateTime } from 'luxon'
import { useAuth } from '@/hooks/useAuth'

function Info() {

    const { user } = useAuth()

    return (
        user ?
            <div className="p-5 text-center">
                <div className="flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4:" data-state="closed"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path></svg>

                </div>
                <h3 className="font-extrabold text-xl">{user?.username}</h3>
                <h4 className="font-bold">{user?.email}</h4>
                <p>Miembro desde: {DateTime.fromISO(user?.createdAt, { locale: 'es' }).toFormat('DDD')}</p>
            </div>
            :
            <div>
                <p>Loading...</p>
            </div>
    )
}

export default Info