import React , {useState} from 'react'
import {Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/Signup.css'

const Signup = () => {
const [fullName , setFullName] = useState('')
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

const [errMsg , setErrMsg] = useState('')
const [successMsg , setSuccessMsg] = useState('')

const handelSignup = (e) =>{
e.preventDefault()
console.log(fullName , email , password)
}
  return (
    <div className='container' >
        <div className="signup-form py-4">

            <h1>Sign Up</h1>
                <form className='form-group mt-4' autoComplete='off' onSubmit={handelSignup}>
                <label>Full Name</label>
                <input type='text' className='form-control' 
                placeholder='Enter your name' required
                onChange={(e) => setFullName(e.target.value)} value={fullName}
                />
                <br/>
                <label>Email</label>
                <input type='email' className='form-control' 
                placeholder='Enter your email' required
                onChange={(e) => setEmail(e.target.value)} value={email}
                />
                <br/>
                <label>Password</label>
                <input type='password' className='form-control'
                 placeholder='Enter your password' required
                onChange={(e) => setPassword(e.target.value)} value={password}
                 />
                
                <div className="btn-box py-5">
                    <p>Already have an account Login <Link to='/login' className='link'>Here</Link> </p>
                    <Button className='btn btn-success' type='submit'>LOGIN</Button>

                </div>
                </form>
                            
        </div>
    </div>
  )
}

export default Signup