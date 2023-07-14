
async function FetchProducts() {
    try {
        const response = await fetch('http://localhost:1337/api/products/');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log(data)
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// async function FetchTopRatedProducts() {
//     try {
//         const products = await FetchProducts();
//         const sortedProducts = products.sort((a: any, b: any) => b.rating.rate - a.rating.rate);
//         const topRated = sortedProducts.slice(0, 6);
//         return topRated
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }


export { FetchProducts }