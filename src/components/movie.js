import React from 'react'
import './movie.css';
export default function Movie({title, rating, review,imgSrc}) {
  return (
    <div>
               

      <h1 className='title'>{title}</h1>
      <img  className='movieImage' src={imgSrc} alt={title}/>
      <h4>{review}</h4>
      <h5>{rating}</h5>
      <div></div>
    </div>
  )
}
