import React from 'react'
import '../../App.css'


const MovieItem = ({item}) => {
  return (
  
      
      
      <div className='card-inner'>
        <div className='card-front'>
        <img src={item.Poster} alt="movie"/>
        <h1>{item.Type}</h1>
          <ul>
            <li>
              <strong>year:</strong> {item.Year}
            </li>
            <li>
              <strong>movie name:</strong> {item.Title}
            </li>
          </ul>
        </div>
    </div>
  )
}

export default MovieItem