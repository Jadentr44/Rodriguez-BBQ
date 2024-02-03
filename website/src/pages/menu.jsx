import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
export default function menu() {
  return (
    <main>
      <Navbar />
      <section className='mt-4 md:mt-24 max-w-6xl px-8 mx-auto'>

      <div className='flex items-center mb-4'>
        <div className='w-8 h-1 mr-2  bg-red-600'></div>
        <h2 className='text-4xl font-semibold text-red-600'>Main Dishes</h2>
      </div>
      <Menu query={"main"} />
      </section>
      <section className='mt-8 max-w-6xl mx-auto px-8'>

      <div className='flex items-center mb-4'>
        <div className='w-8 h-1 mr-2  bg-red-600'></div>
        <h2 className='text-4xl font-semibold text-red-600'>Side Dishes</h2>
      </div>
      <Menu query={"side"} />
      </section>
      <Footer />
    </main>
  )
}
