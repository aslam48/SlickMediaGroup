import React from 'react'
import '../../App.css'
import Spin from '../ui/Spinner'
import MovieItem from './MovieItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MovieSlide = ({items, isLoading}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    isLoading ? <Spin/> : <Slider className='aslam' {...settings}>
   {
      items &&  items.map((item)=>(
            <MovieItem key={item.imdbID} item={item} ></MovieItem>
        ))
    }

  </Slider>

  )

}

export default MovieSlide