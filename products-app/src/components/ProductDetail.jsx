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
      console.log(res)
    }
    fetchProduct()
  }, [id])

  return (
    <div className='detail'>
      <img id='img' src={product.imgURL} alt="product" />
      <h4 id='product-name'>{product.name}</h4>
      <h3 id='product-price'>{product.price}</h3>
      <p id='description'>{product.description}</p>
    </div>
  )
}
