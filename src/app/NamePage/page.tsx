import Link from 'next/link';
import React from 'react'

function NamePage() {
  return (
    <div className='p-5 font-extrabold'>
        
        <h2 className='bg-purple-500 p-5'>NamePage</h2>

    <Link href={"/HomePage"}>HomePage</Link></div>
  )
}

export default NamePage;