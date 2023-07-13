
async function FetchProducts() {


    const url = `http://localhost:1337/api/products`

    fetch('http://localhost:1337/api/products/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data
            // Haz algo con los datos recibidos
        })
        .catch(error => {
            console.error(error);
        });


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