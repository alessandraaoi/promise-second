import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Productos() { 

    const [ productos, setProductos ] = useState([])

    useEffect( () => {
        axios ({url: 'https://fakestoreapi.com/products'})
        .then (respuesta => setProductos(respuesta.data)) // guardo la información en el State
        .catch (error => console.log(error))
    }, [])


  return (
    <div className='general-productos-div'>

        <h2 className='h2-titulo'>Productos</h2>
        <div className='div-productos'>
        {productos.map (producto => 
            <Producto key = {producto.id}{...producto}/>
        )}
        </div>
      
    </div>
  )
}

const Producto = (props) => {

    const { image, title, price } = props; 

    return (
        <>
        <div className='div-producto'>
            <div className='div-img'><img src = {image} alt = {title} className='img-producto'/></div>
            <h3 className='titulo-producto'>{title}</h3>
            <p className='precio-producto'>{price}</p>
        </div>
        </>
    )
}



export default Productos
