import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#9D3C72] flex justify-between py-3 px-10 text-white'>
      <h1 className='text-2xl'>My Daily Posts</h1>

      <div className='space-x-5 '>
        <NavLink to='/' replace={true}>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>


    </div>
  )
}

export default Header