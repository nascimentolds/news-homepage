import Image from 'next/image'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SideNews from './components/SideNews'
import BottomNews from './components/BottomNews'

export default function Home() {
  return (
    <div className='p-4 md:py-10 md:px-36'>
      <header>
        <Nav />
      </header>
      <main className='md:mt-12'>
        <div className='md:flex md:gap-x-8'>
          <Hero />
          <SideNews />
        </div>
        <BottomNews />
      </main>
    </div>
  )
}
