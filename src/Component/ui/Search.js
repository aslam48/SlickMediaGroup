import React from 'react'
import '../../App.css'
import { BsSearch } from "react-icons/bs"


const Search = () => {
  return (
    <div>
        <div><BsSearch className='search'/>
        <input placeholder='search movie'/>  
        </div>
    </div>
  )
}

export default Search