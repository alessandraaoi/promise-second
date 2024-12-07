import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Carrito() {

    //https://fakestoreapi.com/carts

    const [carritos, setCarritos] = useState([])

    let fetchCarrito = async () => {
        const peticion = await fetch ('https://fakestoreapi.com/carts')
        const datos = await peticion.json()
        setCarritos(datos)    
    }

    useEffect(()=>{
        fetchCarrito()
    }, [])

  return (

    <div className='carrito-div'>
        {carritos.map (carrito =>
            <Cart key = {carrito.id}{...carrito}/>
        )}
      
    </div>
  )
}

const Cart = (props) => {
    const {date, products} = props;

    return (
        <>
        <p className='cart-date'>{date}</p>
        {products.map (product =>
            <p key={product.productId}>Product N* {product.productId}, Quantity: {product.quantity}</p>
        )}
        <br></br>
        </>
    )
}

export default Carrito
