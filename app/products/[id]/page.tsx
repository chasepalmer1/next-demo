import { products } from '../../../product_data/product_data.json'

interface Product {
    params: {
        id: number;
    }
}

interface apiProduct {
    name: string;
}

async function getUsers(): Promise<apiProduct[]> {
    const res = await fetch('http://localhost:3000//api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    return res.json();
}

async function createProduct(data: apiProduct): Promise<any> {
    try  {
        const res = await fetch('https://localhost:3000//api/products', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate that the request body is JSON
            },
            body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        });
        
        if (!res.ok) {
            // Handle HTTP errors, e.g., 404, 500
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const resData: any = await res.json(); // Parse the JSON response
        return resData;

    }   
    catch (error) {
        console.error('Error creating post:', error);
        throw error; // Re-throw the error for further handling
    }
}

console.log(products)

export default async function productDetails ( { params }: Product ) {
    const productId = await params.id
    console.log(productId)
    
    let api_products = await getUsers()
    
    console.log(api_products)
    
    return (
        <div>
        <h1>Product Name: {api_products[productId - 1].name}</h1>

        <h2>Create Product:</h2>
        </div>
    )
}