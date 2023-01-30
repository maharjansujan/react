import React from 'react'
import { postadd, updatePost } from '../features/post';
import { nanoid } from '@reduxjs/toolkit';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';

const Modal = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();

  const { state } = useLocation();
  const { type } = useParams();



  const blogSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Too short').max(200, 'Too Long').required('title is required'),
    detail: Yup.string().min(150, 'Too short').max(2000, 'Too Long').required('detail is required'),
  });


  const formik = useFormik({
    initialValues: {
      title: state === null ? '' : state.post.title,
      //title: state?.post?.title ?? '',
      detail: state === null ? '' : state.post.detail,
      image: state === null ? '' : state.post.imageUrl
    },
    onSubmit: (val, { resetForm }) => {

      if (type === 'create') {
        const newPost = {
          title: val.title,
          detail: val.detail,
          id: nanoid(),
          imageUrl: val.image
        };
        dispatch(postadd(newPost));
        nav(-1);
      } else {

        const newPost = {
          title: val.title,
          detail: val.detail,
          id: state.post.id,
          imageUrl: val.image
        };

        dispatch(updatePost(newPost));
        nav(-1);

      }

      // const url = URL.createObjectURL(val.image);


    },
    validationSchema: blogSchema
  });


  return (
    <div>


      <form onSubmit={formik.handleSubmit} className='flex justify-center mt-3 items-center max-h-2xl '>
        <div className='w-[40%] shadow-2xl bg-white p-4 space-y-4 lg:w-[90%] xl:w-[90%]'>

          <div className='flex justify-between'>
            <h1 className='text-2xl '>Add Some Blog</h1>

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


          {formik.values.image && <img className='h-14 w-14' src={formik.values.image} alt="" />}


          <div className='flex flex-col space-y-2'>
            <label htmlFor="image">{type === 'create' ? 'Select an Image' : 'Change an image'}</label>
            <input onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.currentTarget.files[0]);
              reader.addEventListener('load', () => {
                formik.setFieldValue('image', reader.result);
              })

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