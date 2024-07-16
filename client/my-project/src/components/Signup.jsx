import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username, email, password})
    .then(result => {console.log(result)
    navigate('/login')
  })
    .catch(err => console.log(err))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 mb-2'>Username</label>
                <input
                type='text'
                name='email'
                placeholder='Enter Your Name'
                className='w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300'
                onChange={(e) => setUsername(e.target.value)}
                />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 mb-2'>E-mail</label>
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              className='w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 mb-2'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Sign Up
          </button>
        </form>
        <p className='p-2'>Already an Account ? </p>
        <div className='flex justify-center items-center text-center'>
          <Link
            to="/login"
            className='w-full m-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'
          >
            Login
          </Link>

        </div>
      </div>
    </div>
  );
}
