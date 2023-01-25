import React from 'react'
import { useParams } from 'react-router'

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, perspiciatis aut molestiae animi alias quas! Soluta nesciunt blanditiis neque ducimus consectetur dolore eius obcaecati omnis facere provident veritatis necessitatibus itaque eos earum consequuntur magni, odio sed pariatur laudantium voluptatum laboriosam nobis magnam? Aliquam autem voluptates animi vero deleniti accusamus, omnis quas est blanditiis consequuntur dignissimos voluptate facere repellat quis laboriosam quam ea eaque eius sunt voluptatum ex excepturi debitis similique error! Ipsa saepe fugit doloremque autem alias maiores a aliquam nulla explicabo ad, nihil pariatur amet inventore blanditiis ipsam officiis numquam sapiente! Esse vitae similique enim quos tempore odio perspiciatis!</p>
    </div>
  )
}

export default Detail