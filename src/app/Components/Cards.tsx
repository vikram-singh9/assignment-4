'use client'
import React from 'react'
interface Props {
    name:string,
    roll:number,
    distance:string,
    city:string,
    center:string,
    campus:string,
    day:string
}

const Cards = (props:Props) => {
  return (
    <>
    <div className='bg-blue-100 p-6  text-zinc-900 border-2 border-zinc-700 border.md m-10 w-96 h-60 inline-block  '
    >
    <div className='leading-7 h-100 w-30'>
    <span><strong className='text-blue-500'>Full Name : </strong>{props.name}</span> <br />
    <span><strong className='text-blue-500'>Roll no : </strong>{props.roll}</span> <br />
    <span><strong className='text-blue-500'>Distance Learning : </strong>{props.distance}</span> <br />
    <span><strong className='text-blue-500'>City : </strong>{props.city}</span> <br />
    <span><strong className='text-blue-500'>Center : </strong>{props.center}</span> <br />
    <span><strong className='text-blue-500'>Campus : </strong>{props.campus}</span> <br />
    <span><strong className='text-blue-500'>Day : </strong>{props.day}</span> <br />
    </div>
    

    </div> 
    </>
  )
}

export default Cards