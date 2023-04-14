import React, { useState } from 'react'

const Signup = () => {

    let [input,setInput] = useState({
                            firstName: "" , 
                            lastName: "" , 
                            email: "" , 
                            passWord:""
                        });

    const fun1 = (e)=>{
        const {name , value } = e.target;
         console.log(e.target.value);
        setInput(...input,{[name] : value})
        // setInput({[name] : value})
        console.log(input , "rupesh")
        
    }

  return (
    <div>
        <h1>Sign-up Page</h1>

        <label>FirstName</label>
        <input type='text' name='firstName' value={input.firstName}  onChange={fun1}  id='' placeholder='first naam likho' />
        <br/>
        <label>lastName</label>
        <input type='text' name='lastName' value={input.lastName} onChange={fun1}  id='' placeholder='lastst naam likho' />
        <br/>
        <label>Email</label>
        <input type='email' name='email' value={input.email} onChange={fun1} id='' placeholder='email likho' />
        <br/>
        <label>Password</label>
        <input type='password' name='passWord' value={input.passWord} onChange={fun1} id='' placeholder='password likho' />
        <br/>
        <button>Signup</button>
    </div>
  )
}

export default Signup