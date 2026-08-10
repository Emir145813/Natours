import { IGuide } from '@/components/interfaces'
import Image from 'next/image'
import React from 'react'


interface IGuidesProps {
  guides : IGuide[]
}

function Guides({guides} : IGuidesProps) {
  return (
    <div className='grid grid-cols-4'>
      {guides.map((guide , index)=>(
        <div key={index} className='flex items-center gap-4'>
          <Image
            src={guide?.avatar || "/images/users/default.jpg"}
            alt='user-avatar'
            width={80}
            height={80}
            className='rounded-full object-cover'
          />
          <div className='flex flex-col gap-0.5'>
            <span>
              {guide.name}
            </span>
            <span className='text-foreground/50'>
              {guide.role.charAt(0).toLocaleUpperCase() + guide.role.slice(1).split("-").join(" ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Guides