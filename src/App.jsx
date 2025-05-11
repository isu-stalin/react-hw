import React from 'react'
import './App.css'    
import HeroSection from './components/hero/Hero'
import Categories from './components/Categories/Categories'
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts'
import MostRecent from './components/MostRecents/MostRecents'
import StayInTouch from './components/StayInTouch/StayInTouch'

const App = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedPosts />
      <MostRecent />
      <StayInTouch />
    </div>
  )
}

export default App
