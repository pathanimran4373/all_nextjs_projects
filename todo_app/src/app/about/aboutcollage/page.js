// learn routing from this page
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutCollage = () => {

   const router = useRouter()
    
  return (
    <div>AboutCollage
        <hr></hr>
        <button onClick={()=>router.push('/about')}> go to about page</button>
        <button onClick={()=>router.push('/about/aboutstudent')}> go to about student</button>
    
    </div>
    
  )
}

export default AboutCollage