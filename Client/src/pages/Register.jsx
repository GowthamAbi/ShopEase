import React from 'react'

export default function Register() {
  return (
    <section className='flex justify-center items-center min-h-screen'  >
        <div className='mx-auto max-w-2xl  bg-gray-200 '>
            <h1>Register</h1>
            <form action="">
                <label htmlFor="">Name :</label>
                <input type="text" />

                <label htmlFor="">Phone No :</label>
                <input type="phone" />

                <label htmlFor="">Mail :</label>
                <input type="mail" />

                <label htmlFor="">Password :</label>
                <input type="text" />

                <button >Submit</button>
                
            </form>
        </div>
    </section>
  )
}
