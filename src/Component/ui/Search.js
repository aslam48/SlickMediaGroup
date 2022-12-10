import React, {useState} from 'react'
import '../../App.css'



const Search = ({getQuery}) => {
  const [text, setText] = useState("")

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div>
        {/* <div><BsSearch className='search'/> */}
        <input  type='text'  placeholder='search for any  movie' value={text} onChange={(e) => onChange(e.target.value)} autoFocus/>  
       
    </div>
  )
}

export default Search