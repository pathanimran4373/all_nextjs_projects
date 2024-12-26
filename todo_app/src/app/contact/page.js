// learn routing

"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
const router = useRouter()
  return (
    <>
        <div>Contact</div>
<button onClick={()=>router.push('/')}>go to home</button>
<button onClick={()=>router.push('/contact/person')}>contact person</button>
    </>
  )
}

export default Contact