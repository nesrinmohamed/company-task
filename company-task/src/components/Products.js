import React from 'react'
import { Button, Row } from 'react-bootstrap'
import './css/products.css'
import ProductItem from './ProductItem'

const Products = ({ data, filter , setFilter, loading , handelDelete}) => {
    const filterProduct = (value) =>{
        const uploadList= data.filter((x) => x.category === value)
        setFilter(uploadList)
        console.log(uploadList)
        }

    return (
      <>
  
   <div className='d-flex' >

        <div className='categories'>
      <Row  className='mt-5 mx-2 '>
      <div className='category-item' >
        <Button className='btn btn-category' type='submit'onClick={()=> setFilter(data)}>All Products</Button>
        <Button className='btn btn-category'type='submit'onClick={()=> filterProduct('smartphones')}>smartphones</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('laptops')}>laptops</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('skincare')}>skincare</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('home-decoration')}>home-decoration</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('furniture')}>furniture</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('tops')}>tops</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('womens-dresses')}>womens-dresses</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('womens-shoes')}>womens-shoes</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('mens-shirts')}>mens-shirts</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('womens-shoes')}>womens-shoes</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('womens-jewellery')}>womens-jewellery</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('sunglasses')}>sunglasses</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('automotive')}>automotive</Button>
        <Button className='btn btn-category'type='submit' onClick={() => filterProduct('lighting')}>lighting</Button>
      </div>
      </Row>
</div>

       <div className=" products ">
        {loading ? <div>Loading ...</div> :(
            filter?.map(product =>(
             <ProductItem product={product} key={product.id} handelDelete={handelDelete}/>
                ))
            )}
        </div>
   </div>
   </>
  )
}

export default Products