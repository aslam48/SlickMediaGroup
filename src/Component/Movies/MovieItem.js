import React from 'react'

const MovieItem = ({item}) => {
  return (
    <div>
        <div>
       <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <img src={item.Poster} alt="movie"/>
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
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
    </div>
    </div>
    </div>
  )
}

export default MovieItem