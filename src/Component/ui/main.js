import React from 'react'
import '../../App.css'
import Typewriter  from "typewriter-effect"
import {motion} from "framer-motion"


const main = () => {
  
  return (
    <motion.div
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
     }} 

     animate={{
        x:0,
        opacity: 1,
        scale:1,
     }}

     transition={{
        duration:0.5,
     }}
    className='background-img'>


   <motion.div
   initial={{
    x:-500,
    opacity:0,
    scale:0.5
 }} 

 animate={{
    x:0,
    opacity: 1,
    scale:1,
 }}

 transition={{
    duration:2.5,
 }}
    className='background-text'>
    <p>Watch something  <div className='text-color'> <Typewriter  
    onInit={(typewriter) => {
        typewriter
        .typeString("Fantastic.")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Amazing.")
        .deleteAll()
        .typeString("incredible.")
        .start()
    }}
    /> </div></p>
    
   </motion.div>
    </motion.div>
  )
}

export default main