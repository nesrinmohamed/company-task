import React from 'react'
import { Button } from 'react-bootstrap'
import{useLocation , useNavigate} from 'react-router-dom'

const ProductDetails = () => {
    const location =  useLocation()
    const navigate = useNavigate()
console.log(location.state)
const product= location.state 

  return (
    <div className='my-3'>
        <Button onClick={()=> navigate('/')}>Back To Home</Button>
        <h2 className='py-3'>ProductDetails</h2>
      <div className='text-center'>
        <div className='img'>
            <img src= {product.thumbnail} alt={product.title}/>
        </div>
        <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.rating}</p>
            <p>{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
