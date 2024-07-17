'use client'
import React, { useState } from 'react'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
        const body = {
            name: name,
            email: email,
            message: message
        }

        console.log(body);
    }
  return (
    <div id='contact' className="mt-44 w-1/3 mb-5">
        <p className="text-white text-3xl text-center">Contact Me</p>
        <div className="p-7 mt-5 bg-white rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
                <input className="border-2 p-2 w-full border-black rounded-full" type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                <input className="border-2 p-2 w-full border-black rounded-full" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <textarea className="border-2 p-2 w-full rounded-2xl h-44 border-black" placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className="bg-blue-600 text-white rounded-full p-2 w-44" type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact