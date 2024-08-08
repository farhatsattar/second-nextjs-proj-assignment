'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'



function HomePage() {
    const router = useRouter();
  return (
    <div className='p-5 font-extrabold'>
        <h2 className='p-5 bg-rose-500'>
            HomePage 
            </h2>
            
            <Link href={'/Home'}>Home
            
            </Link>
            
        <br/> 
        <Link href={'/NamePage'}>NamePage
        </Link> 
        
        <br/>
        
        <button className='bg-red-700 py-2 border-3 px-8 focus:ouline-square' onClick={()=>router.push('/HomePage/Button')}>Button</button>
        
        </div>
        

  )
}

export default HomePage;