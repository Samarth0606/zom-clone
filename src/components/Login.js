import React, { useState } from 'react'

    const Login = () => {

        let [input,setInput] = useState({
            email:"",
            password:""
        })

    function fun2(e){
        let {name , value} = (e.target);
        setInput({...input , [name] : value})
        console.log(input , "sam")
    }


  return (
    <div>
        <h1>Login page</h1>
        <label htmlFor="email">email: </label>
        <input type="text" name='email' id='email' onChange={fun2} placeholder='enter email' />
        <br />
        <label htmlFor="pass">Password: </label>
        <input type="password" name='passWord' id='pass' onChange={fun2} placeholder='enter password' />
        <br />
        <button>Login</button>
    </div>
  )
}

export default Login