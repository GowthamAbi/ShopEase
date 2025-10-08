import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [userData,setUserData]=useState({
    email:'',password:''
  })

 const navigate=useNavigate()

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUserData({...userData,[name]:value})
  }
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userData)
    navigate('/')
    setUserData({email:'',password:''})
  }
  return (
    <section >
      <div className='flex items-center min-h-screen  font-serif'>
      <div className='bg-gray-300 mx-auto max-w-2xl rounded-lg p-4 shadow-2xl'>
        <div>
        <h1 className='text-center text-2xl font-bold text-purple-800 mb-4 '>LOG IN</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-80 space-y-4  '>
        <label >EMAIL<span className='text-red-600'> *</span></label>
          <input type="mail" required className=' px-2 outline-none text-center border border-gray-200 rounded-lg focus:ring-2  focus:ring-blue-400 ' onChange={handleChange} name='email' value={userData.email}/>
        <label >PASSWORD<span className='text-red-600'> *</span></label>
          <input type="text" required
           className=' px-2 outline-none text-center border border-gray-200 rounded-lg focus:ring-2  focus:ring-blue-400 ' onChange={handleChange} name='password' value={userData.password}/>
        <button  type='submit'
        disabled={!userData.email && !userData.password}
         className={`${( !userData.email && !userData.password )?'bg-gary-400':"bg-blue-300 hover:bg-blue-500"}cursor-pointer text-white   rounded-3xl`}
        >SUBMIT</button>
        <div className='flex  space-x-2'>
          <h3>You haven't a Account ?</h3>
          <a href="" className='cursor-pointer hover:text-blue-400 transform transition-tarnsform hover:scale-120'>Register</a>
        </div>
        </form>
        </div>
      </div>

    
      
      </div>
    </section>
  )
}
