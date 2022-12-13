import React, { useCallback, useEffect, useState } from "react";
import "../../App.css";
import Spin from "../ui/Spinner";

import MovieItem from "./MovieItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fechitems } from "../../action";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieSlide = ({ type = "movie", title,query }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = useCallback(async () => {
    const result = await fechitems({ s: query, type });
    setItems(result.Search);
    setIsLoading(false);
  }, [query]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);



  return (
    <>
      <h4 className="movie-title">{title}</h4>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 4, // optional, default to 1.
          }, 
          mwdium: {
            breakpoint: { max: 1500, min: 464 },
            items: 4,
            slidesToSlide: 3, // optional, default to 1.
          },

          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 2, // optional, default to 1.
          },
        }}
      >
        {items &&
          items.map((item) => (
            <MovieItem key={item.imdbID} item={item}></MovieItem>
          ))}
        {isLoading && <Spin />}
      </Carousel>
    </>
  );
};

export default MovieSlide;
