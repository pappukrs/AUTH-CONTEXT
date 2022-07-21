import React from 'react'
import axios from 'axios';

const Login = () => {

  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  

  return (
    <div>

<TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
<br/>
<TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Password" variant="standard" />
<br/>
<Button onClick={()=>isAuth({email,password:pass})} variant="outlined">Login</Button>
      
    </div>
  )
}

export default Login