import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { change } from '../features/menuSlice';


const Header = () => {
  const { toggle } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchText: ''
    },
    onSubmit: ((val, { resetForm }) => {
      nav(`/search/movie/${val.searchText}`);
      resetForm();
    })
  });

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <div className='bg-[#032541] flex justify-between py-2 px-10 text-white items-baseline z-50 sticky top-0'>


      <div>


        <NavLink to='/' replace={true}> <h1 className='text-2xl'>Tmdb</h1></NavLink>


        {toggle === true && <div className='flex-col mt-2 space-y-2 hidden sm:flex  '>
          {links.map((l, i) => {
            return <NavLink onClick={() => dispatch(change())} className='menu-item' key={i} to={l.path}>{l.name}</NavLink>;
          })}
        </div>}
      </div>




      {toggle === true ? <button className='hidden sm:block mt-1' onClick={() => dispatch(change())} > <i className="fa-solid fa-xmark fa-xl"></i></button> : <button onClick={() => dispatch(change())} className='hidden  sm:block mt-1'><i className="fa-solid fa-bars fa-xl "></i></button>
      }



      <div className='space-x-5  sm:hidden flex items-center'>
        <NavLink className='menu-item' to='/news/page'>Show News</NavLink>
        <NavLink className='menu-item' to='/page/top_rated'>Top_Rated</NavLink>
        <NavLink className='menu-item' to='/page/upcoming'>UpComing</NavLink>

        <form onSubmit={formik.handleSubmit} className='w-[200px]'>
          <div className='relative'>
            <input type="search" placeholder='search movies' id='searchText' name='searchText' onChange={formik.handleChange} value={formik.values.searchText} className='block w-full pl-4 py-1 rounded-full outline-none border border-gray-300 text-gray-700' />

            <div className='absolute right-2 inset-y-0 flex items-center pr-2'>
              <button type='submit' className='text-green-700 '><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>

        </form>

      </div>


    </div>
  )
}

export default Header