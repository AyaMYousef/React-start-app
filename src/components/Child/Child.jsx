import React from 'react'

export default function Child(props) {

    const { id, name, onsale, productIndex } = props.productDetails;

    return (
        <>
            <div className='w-1/4 p-4'>
                <div className='p-6 shadow-xl rounded-xl bg-gray-200'>
                    <h1>Index: {props.productIndex}</h1>
                    <h4>Id: {id}</h4>
                    <h4>Name: {name}</h4>

                </div>
                {/*onsale == true ? <div>OnSale</div> : null*/}
                {onsale && <div>OnSale</div>}
            </div>
            <button onClick={() => props.delete(id)}>Delete</button>
            <button onClick={() => props.update(props.productIndex)}>Update</button>
        </>

    )
}
