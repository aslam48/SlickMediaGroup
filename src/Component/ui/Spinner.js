import React from 'react'
import Spin from '../../assets/spinner.gif'

const Spinner = () => {
  return (
   <img src={Spin} style={{width: "100px", margin: "auto", display:"block"}} alt='loading'/>
  )
}

export default Spinner