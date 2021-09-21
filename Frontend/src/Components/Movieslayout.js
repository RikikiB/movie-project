import './Movieslayout.scss'
import React from 'react'
import Carousel from './Carousel'
import { useEffect } from './views/MovieDetailPage'

function MovieLayout() {
  return (
    <div className='Movielayout'>
      <h1> This is for the layout of all movies</h1>
      <Carousel />
      <div className='Movies'>
        <div grid area='A' />
        <div grid area='B' />
        <div grid area='C' />
        <div grid area='D' />
        <div grid area='E' />
        <div grid area='F' />
        <div grid area='G' />
        <div grid area='H' />
        <div grid area='I' />
        <div grid area='J' />
      </div>

      <useEffect />
    </div>
  )
}

export default MovieLayout
