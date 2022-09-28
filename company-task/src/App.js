import React , {useState , useEffect} from 'react';
import './App.css';
import {Routes , Route} from'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import axios from 'axios';
import ProductDetails from './components/ProductDetails';

function App() {
  const [data, setData] = useState([])
  const [filter , setFilter] = useState(data)
  const [loading , setLoading] = useState(true)   
  const [title, setTile]= useState('')
  const [price, setPrice]= useState('')
  const [file, setFile]= useState('')
  const [desc, setDesc]= useState('')  
 
  useEffect(() =>{
      axios.get('https://dummyjson.com/products?&limit=100')
     .then(res => {
      // console.log(res.data.products)
      setData(res.data.products)
      setLoading(false)
      setFilter(res.data.products)
  }
     ).catch((err) => console.log(err))
  },[])
    useEffect(() =>{
    localStorage.setItem('products', JSON.stringify(data))
    } , [data])

const handelAddProduct = () =>{
setData([
...data, 
{
  id: data.length + 1,
  title:title,
  price:price,
  file:file,
  desc:desc
}
])
}
const handelDelete = (id) =>{
let products = data.filter((p) => p.id !== id)
setFilter(products)
// console.log('data delete')
}
  return ( 
   <>
   <NavBar/>
   <div>
    <Routes>
      <Route path='/' element={<Home data={data} loading={loading}   filter={filter} setFilter={setFilter} handelDelete={handelDelete} />}/>
      <Route path='/products' element={<Products data={data} loading={loading} filter={filter} setFilter={setFilter} />}/>
      <Route path='/productdetails' element={<ProductDetails data={data}/>}/>
      <Route path='/addproduct' element={<AddProduct setTitle={setTile} setPrice={setPrice} setFile={setFile} setDesc={setDesc} handelAddProdcut={handelAddProduct}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </div>
   </>
  );
}

export default App;
