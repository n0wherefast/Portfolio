import Link from 'next/link'
import React from 'react'
import Weather from './Weather'

function TopBar() {
  return (
   <div className="bg-stone-900 text-stone-100 text-sm sticky flex justify-between   top-0  ">
       <Weather />
        <div className=" px-4 py-2 flex items-center justify-between">
            <p className="tracking-wide"></p>
            <Link href="#contact" className=" tracking-wide underline underline-offset-4">Enquire now</Link>
        </div>
        
   </div>
  )
}

export default TopBar