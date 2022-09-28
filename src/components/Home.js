import React from 'react'
import Products from './Products'
import Header from './Header'

const Home = ({filter, setFilter, data , loading  , handelDelete }) => {
return (
 <>
 <Header />
<div className='d-flex'> 
  <Products className='col-lg-9' data={data} loading={loading} filter={filter} setFilter={setFilter} handelDelete={handelDelete}/>
</div>
 </>
  )
}

export default Home