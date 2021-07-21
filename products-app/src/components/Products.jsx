import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredData, setFilteredData] = useState(products)
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://products-api-01.herokuapp.com/api/products')
      setProducts(res.data)
      console.log(res.data)
      setFilteredData(res.data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <div id='list-div'>
        {products.map((product, key) => {
          return (
            < Link to={`/${product._id}`} className='list' >
              <div className='product-div'>
                <img id='img' src={product.imgURL} alt="image" />
                <h4 id='name'>{product.name}</h4>
                <h3 id='price'>{product.price}</h3>
              </div>
            </Link>)
        })}
      </div>
    </div >
  )
}
