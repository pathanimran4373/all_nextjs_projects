'use client'

import React from 'react'
import Link from "next/link";

const StudentList = () => {
  return (
    <div>
        <h1>StudentList</h1>
        <Link href="/studentlist/imran"> imran</Link>
        <Link href="/studentlist/farhat"> farhat</Link>
        <Link href="/studentlist/ranu"> ranu</Link>
        <Link href="/studentlist/altaf"> altaf</Link>
    </div>
  )
}

export default StudentList