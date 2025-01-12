import React from 'react'
import { useState } from 'react'
import Child from '../Child/Child';

export default function Parent() {

    const [products, setProducts] = useState([
        {
            id: 123, name: 'Product 1', onsale: false
        },
        { id: 345, name: 'Product 2', onsale: true },
        { id: 4343, name: 'Product 3', onsale: true },
        { id: 43433, name: 'Product 4', onsale: true },
        { id: 43663, name: 'Product 5', onsale: false },
        { id: 434993, name: 'Product 6', onsale: false }
    ]);

    function deleteProduct(id) {
        console.log(id);
        let myProducts = structuredClone(products);
        let newProducts = myProducts.filter((product) => product.id !== id);
        setProducts(newProducts);
    }

    function updateProduct(index) {
        let myProducts = structuredClone(products);
        myProducts[index].id++;
        console.log(index);
        setProducts(myProducts);

    }
    return (
        <>
            <div>Parent</div>
            <div>
                {products.map((product, index) => (<Child key={product.id} productIndex={index} update={updateProduct} delete={deleteProduct} productDetails={product} />))}
            </div>
        </>

    )
}
