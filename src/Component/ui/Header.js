import React from 'react'
import '../../App.css'
import MyTextPng from '../../assets/MyTestApp.png'

const Header = () => {
  return (
    <div>
    <header>
        <div className='header-div'>
            <img src={MyTextPng}  alt="pic" />
            </div>
    </header>
    </div>
  )
}

export default Header