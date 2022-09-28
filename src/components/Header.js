import React ,{useState} from 'react'
import './css/Header.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Header = () => {
  const [input , setInput] = useState('')
  return (
    <div className='header mb-3'>
      <div className="header-item">
      <h2>Exclusive Brands</h2>
      <p>Get your exclusive & brands delivered to you in no time</p>
     <form>
      <input type='text' 
      value={input}
      placeholder='search for  products from here' 
      onChange={e => setInput(e.target.value)}
      />
      <button className='btn btn-success'> <AiOutlineSearch/> Search </button>
      </form>
      </div>
    </div>
  )
}

export default Header
