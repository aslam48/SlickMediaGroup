import React from 'react'
import '../../App.css'
import Spin from '../ui/Spinner'
import MovieItem from './MovieItem'


const MovieSlide = ({items, isLoading}) => {
  return (
  isLoading ? <Spin/> : <section>
    {
      items &&  items.map((item)=>(
            <MovieItem key={item.imdbID} item={item}></MovieItem>
        ))
    }
  </section>
  )
}

export default MovieSlide