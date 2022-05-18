import React, {useState} from 'react'
import ReactStars from 'react-stars'
import ReviewList from './reviewList'

export default function review({value,stars}) {
  return (
    <div>
     
      <p> {value}</p>
      <ReactStars/>

     <div>
      {/**TODO: fix star rating to take in stars prop */}
     </div>
    </div>
  )
}
