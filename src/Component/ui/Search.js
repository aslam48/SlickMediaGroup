import React, {useState} from 'react'
import '../../App.css'
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';



const Search = ({getQuery}) => {
  const [text, setText] = useState("")

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div>
        <input  type='text'  placeholder='search for any  movie' value={text} onChange={(e) => onChange(e.target.value)} autoFocus/>

        <div className='flex-arrow'>
        <div><BsArrowLeft className='search'/></div>
        <p>Swipe</p>
        <div><BsArrowRight className='search'/></div>
        </div>
      

    </div>
  )
}

export default Search