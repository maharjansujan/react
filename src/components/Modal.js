import React from 'react'
import { postadd, toggle } from '../features/post';
import { nanoid } from '@reduxjs/toolkit';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();


  const blogSchema = Yup.object().shape({
    title: Yup.string().min(5, 'Too short').max(200, 'Too Long').required('title is required'),
    detail: Yup.string().min(5, 'Too short').max(1000, 'Too Long').required('detail is required'),
  });


  const formik = useFormik({
    initialValues: {
      title: '',
      detail: '',
      image: ''
    },
    onSubmit: (val, { resetForm }) => {
      console.log(val);

      const url = URL.createObjectURL(val.image);

      const newPost = {
        title: val.title,
        detail: val.detail,
        id: nanoid(),
        imageUrl: url
      };
      dispatch(postadd(newPost));

      resetForm();
      dispatch(toggle(false));

    },
    validationSchema: blogSchema
  });


  return (
    <div>


      <form onSubmit={formik.handleSubmit} className='flex justify-center fixed inset-0 items-center max-h-2xl '>
        <div className='w-[40%] shadow-2xl bg-green-300 p-4 space-y-4'>

          <div className='flex justify-between'>
            <h1 className='text-2xl '>Add Some Blog</h1>
            <button onClick={() => dispatch(toggle(false))}><i className="fa-solid fa-circle-xmark fa-xl text-black"></i></button>
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="title">Title</label>
            <input onChange={formik.handleChange} value={formik.values.title}
              className='border border-gray-500 outline-none px-2 py-1' type="text" id='title' name='title' />
            {formik.errors.title && formik.touched.title ? <h1 className='text-pink-700'>{formik.errors.title}</h1> : ''}
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="detail">Detail</label>
            <textarea
              className='border border-gray-500 outline-none px-2 py-1'
              onChange={formik.handleChange} value={formik.values.detail} name="detail" id="detail" cols="30" rows="5"></textarea>
            {formik.errors.detail && formik.touched.detail ? <h1 className='text-pink-700'>{formik.errors.detail}</h1> : ''}
          </div>


          <div className='flex flex-col space-y-2'>
            <label htmlFor="image">Select an Image</label>
            <input onChange={(e) => {
              formik.setFieldValue('image', e.currentTarget.files[0])
            }} className='border border-gray-500 outline-none px-2 py-1' type="file" id='image' name='image' />
          </div>


          <div>
            <button className='bg-blue-500 p-2 w-[40%] rounded' type='submit'>Submit</button>
          </div>


        </div>


      </form>

    </div>
  )
}

export default Modal