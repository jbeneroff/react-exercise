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

  const handleSearch = () => {
    const result = products.filter((data) => {
      return (data.name.toLowerCase().includes(title.toLowerCase()))
    })
    setFilteredData(result)
  }

  const matches = filteredData.filter((item) => item.name.toLowerCase().includes(title.toLowerCase()))

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={title} id='search' type="text" placeholder='Search' onChange={(e) => setTitle(e.target.value)} />
      </form>
      <form className='sort-form'>
        <label for="sort">SORT BY:</label>
        <select className="sort"><option className="option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option><option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option><option value="price-ascending">&nbsp; Price, low to high &nbsp;</option><option value="price-descending">&nbsp; Price, high to low &nbsp;</option></select>
      </form>
      <div id='list-div'>
        {matches.map((product, key) => {
          return (
            < Link to={`/${product._id}`} className='list' >
              <div className='product-div'>
                <img id='img' src={product.imgURL} alt="product" />
                <h2 id='name'>{product.name}</h2>
                <h2 id='price'>{`$${product.price}`}</h2>
              </div>
            </Link>)
        })}
      </div>
    </div >
  )
}
