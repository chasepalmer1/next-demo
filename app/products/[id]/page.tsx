import { products } from '../../../product_data/product_data.json'

interface Product {
    params: {
        id: number;
    };
}

console.log(products)

export default function productDetails ( { params }: Product ) {
    const productId = params.id
    console.log(productId)

    return (
        <div>
            <h1>Product Name: {products[productId - 1].name}</h1>
        </div>
    )
}