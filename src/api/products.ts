
async function FetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data

}

async function FetchTopRatedProducts() {
    try {
        const products = await FetchProducts();
        const sortedProducts = products.sort((a: any, b: any) => b.rating.rate - a.rating.rate);
        const topRated = sortedProducts.slice(0, 6);
        return topRated
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


export { FetchProducts, FetchTopRatedProducts }