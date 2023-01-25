import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../features/post';
import Modal from '../components/Modal';



const Home = () => {

  const dispatch = useDispatch();
  const { posts, showModal } = useSelector((store) => store.post);




  return (
    <div className='p-[2%]'>

      <div className='flex justify-end'>
        <button onClick={() => dispatch(toggle(true))} className='bg-pink-600 p-2 rounded text-white hover:text-green-500 '>Create Post</button>
      </div>


      {posts.map((p) => {
        return <div className='p-5 shadow-lg mt-7 space-y-3' key={p.id}>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>{p.title}</h1>

            <img className='h-[200px] w-[200px]' src={p.imageUrl} alt="" />

            <div className='space-x-5'>
              <button><i className="fa-solid fa-pen-to-square fa-xl text-green-500"></i></button>
              <button><i className="fa-solid fa-trash fa-lg text-pink-700"></i></button>
            </div>
          </div>

          <p>{p.detail}</p>
        </div>
      })}

      {showModal ? <Modal /> : null}


    </div>
  )
}

export default Home