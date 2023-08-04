

async function FetchCategories() {
    try {
        const response = await fetch('http://localhost:1337/api/categories?populate=*');
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


export { FetchCategories }