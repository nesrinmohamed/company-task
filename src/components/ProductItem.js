import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './css/products.css'
const ProductItem = ({product  , handelDelete }) => {
  const {id , title , thumbnail , category , rating ,description , price} = product
const navigate = useNavigate()
  const direct=()=>{
navigate('/productdetails' , {state:product})
}

  return (
    <>  
      <Card style={{ height:'450px' , width:'15rem' }} key={id} >
      <div className="img w-100" style={{height:'150px'}} >
      <Card.Img variant="top" src={thumbnail} className='w-100 h-100'/>
      </div>
      <Card.Body>
       <div className="card-desc w-100">
       <Card.Title>{title}</Card.Title>
        <Card.Text> {description}</Card.Text>
        <div className="price-rate d-flex justify-content-between">
        <p className='price'>${price}</p>
         <span>{rating}</span>
        </div>
       </div>
       <div className="btnBox">
       <Button variant="primary" className='add-card' onClick={direct}>Details</Button>
        <Button variant="danger" className='delete' onClick={() => handelDelete(id)}>Delete</Button>
        </div>
      </Card.Body>
    
    </Card>
    </>
  )
}

export default ProductItem
