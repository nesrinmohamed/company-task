import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = ({handelAddProduct,  setTitle, setPrice, setFile , setDesc}) => {
const navigate = useNavigate()
  return (
    <section className='add_product'>
      <div className="col-sm-6  offset-sm-3 p-3">
<form className='form-group'
 onSubmit={(e)=> {
  handelAddProduct(e)
  navigate('/products')
}}
 
 >
<input type="text" 
id='title'
className='form-control mb-3'
 placeholder='name'
  onChange={(e) => setTitle(e.target.value)} 
        />
        <input type="file" 
        id='file'
        className='form-control mb-3'
         placeholder='file'
         onChange={(e) => setFile(e.target.value)} 
        />
        <input type="number"
        id='price'
         className='form-control mb-3'
          placeholder='price'
          onChange={(e) => setPrice(e.target.value)} 
        />
        <input type="text" 
        id='desc'
        className='form-control mb-3'
         placeholder='description'
         onChange={(e) => setDesc(e.target.value)} 
        />
        <input type="submit" className='form-control' value='Add Product' />

</form>
      </div>
    </section>
  )
}

export default AddProduct
