import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Menu from '../menu/Menu'
import FoodList from '../FoodList/FoodList'

import './Home.css'
import AppDownload from '../AppDownload/AppDownload'
const Home = () => {
  const [category, SetCategory] = useState("All");
  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <div>
      <Hero />
      <Menu category={category} SetCategory={SetCategory} />
      <FoodList category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home