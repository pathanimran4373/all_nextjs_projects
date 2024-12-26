// learn link from this page
"use client"
import React from 'react'
import Link from 'next/link'
const AboutStudent = () => {
  return (
    <div>
        <h1>about student</h1>
        <Link href="/">HOME</Link>
        <hr></hr>
        <Link href="/about">about</Link>
        <hr></hr>
        <Link href="/contact">contact</Link>
        <hr></hr>
        <Link href="about/aboutcollage"></Link>
    </div>
  )
}

export default AboutStudent