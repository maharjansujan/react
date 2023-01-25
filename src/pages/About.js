import React from 'react'
import { useLocation } from 'react-router'

const About = () => {

  const { state } = useLocation();


  return (
    <div className='p-[5%]'>
      <h1>{state?.title}</h1>
      <h1>{state?.genre}</h1>
      <h1 className='text-2xl mb-5'>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum odio aspernatur? Sed totam ipsa labore quidem doloremque numquam, quos quas beatae modi possimus at, recusandae unde doloribus animi aliquam blanditiis alias suscipit magnam optio deserunt laboriosam repellat nulla dignissimos. Animi inventore reprehenderit quis, nesciunt commodi eos obcaecati maiores eveniet asperiores voluptatum aliquam quae repellendus dolore rem nam voluptate quibusdam nemo et error. Quasi, repellendus earum placeat culpa fugiat molestiae voluptatum quae vel delectus distinctio dicta, nam voluptates, vero eius voluptatibus beatae aliquam nisi alias illum sequi iure laborum nulla! Quisquam, cumque impedit officia tenetur hic autem dolores fugiat in sequi odit fugit asperiores inventore odio, minima dolor est enim voluptatum eos laboriosam iusto soluta praesentium laborum consequatur. Magni architecto fugit quis consequuntur ullam quam, rerum, nobis voluptas sed fuga, animi deserunt accusantium illum quo commodi deleniti vel ea soluta harum adipisci natus. Culpa ad laborum doloremque atque aspernatur tempora voluptatem quasi amet porro, sapiente labore harum assumenda doloribus eos iure, facilis praesentium et tenetur recusandae suscipit unde sit. Illo recusandae magni perspiciatis velit sint. Velit, laudantium? Doloribus unde id natus eos nihil eaque eius pariatur veniam! Omnis, numquam, fugit sed consectetur provident magni dignissimos quas reiciendis excepturi quos quo.</p>
    </div>
  )
}

export default About