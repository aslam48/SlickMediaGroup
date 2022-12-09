import React from 'react'
import '../../App.css'



const Search = ({getQuery}) => {
  const [text, setText] = ("")

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div>
        {/* <div><BsSearch className='search'/> */}
        <input  type='text'  placeholder='search movie' value={text} onChange={(e) => onChange(e.target.value)} autoFocus/>  
       
    </div>
  )
}

export default Search