import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { WishList } from '@/api/wishList'

const wishlistCtrl = new WishList()

export default function WhisListIcon(props: any) {

    const { productId } = props
    const [hasWishlist, setHasWishlist] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        if (user) {

            (async () => {
                try {
                    const response = await wishlistCtrl.check(user.id, productId)
                    setHasWishlist(response)
                } catch (error) {
                    setHasWishlist(false)
                    console.log(error);
                }
            })()
        }
    }, [productId, user])

    const addWishlist = async () => {
        if (user) {
            const response = await wishlistCtrl.add(user.id, productId)
            setHasWishlist(response)

        }
        else { return }
    }

    const deleteWishlist = async () => {
        try {
            await wishlistCtrl.delete(hasWishlist.id)
            setHasWishlist(false)
        } catch (error) {
            console.log(error);
        }
    }

    let icon = ''

    if (hasWishlist) {
        icon = 'favorite'
    } else {
        icon = 'no-favorite'
    }

    return (


        <img onClick={() => {
            if (icon === 'favorite') {
                deleteWishlist()
            } else {
                addWishlist()
            }
        }}
            className='w-10'
            src={`/images/${icon}.png`} alt={`${icon}-icon`} />

    )
}
