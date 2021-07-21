import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductDetail.css'

export default function ProductDetail() {

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const URL = 'https://products-api-01.herokuapp.com/api/products'
      const res = await axios.get(`${URL}/${id}`)
      setProduct(res.data)
    }
    fetchProduct()
  }, [id])

  return (
    <div className='detail'>
      <img id='product-img' src={product.imgURL} alt="product" />
      <div className='info'>
        <h1 id='product-name'>{product.name}</h1>
        <h2 id='product-price'>{`$${product.price}`}</h2>
        <p id='description'>{product.description}</p>
      </div>
    </div>
  )
}
