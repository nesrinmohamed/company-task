import React , {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [errMsg , setErrMsg] = useState('')
const [successMsg , setSuccessMsg] = useState('')

const handelLogin = (e) =>{
  e.preventDefault()
console.log(email , password)
}
  return (
    <div className='container' >
    <div className="signup-form">

        <h1>Login</h1>
            <form className='form-group mt-4' autoComplete='off' onSubmit={handelLogin}>
            <label>Email</label>
            <input type='email' className='form-control' required
                onChange={(e) => setEmail(e.target.value)} value={email}
            />
            <br/>
            <label>Password</label>
            <input type='password' className='form-control'  required
                onChange={(e) => setPassword(e.target.value)} value={password}
            />
            
            <div className="btn-box py-5">
                <p>Already have an account Login <Link to='/signup' className='link'>Here</Link> </p>
                <Button className='btn btn-success' type='submit'>Sign Up</Button>


            </div>
            </form>
                        
    </div>
</div>
  )
}

export default Login