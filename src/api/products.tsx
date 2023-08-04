import { Product } from "@/app/types/product";

async function FetchProducts() {
    try {
        const response = await fetch('http://localhost:1337/api/products?populate=*');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function FetchNewProducts() {
    try {
        const products = await FetchProducts();
        const sortedProducts = products.sort((a: Product, b: Product) => {
            const dateA = new Date(a.attributes.releaseDate).getTime();
            const dateB = new Date(b.attributes.releaseDate).getTime();
            return dateB - dateA;
        });
        const news = sortedProducts.slice(0, 6);
        console.log(news);
        return news
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


export { FetchProducts, FetchNewProducts }