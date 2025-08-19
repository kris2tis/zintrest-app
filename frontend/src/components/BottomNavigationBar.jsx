import React from 'react'
import MainNav from './MainNav'

export default function BottomNavigationBar() {
  return (
    <div className='lg:hidden w-full py-2 px-3 bg-white fixed bottom-0 right-0 -translatex-1/2 shadow-2xl'>
      <div className='grid grid-cols-4  justify-center'>
        <MainNav />
      </div>
    </div>
  )
}
