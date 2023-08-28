import React from 'react'
import Navbar from '../home/Navbar'
import HeaderBp from './HeaderBp'
import SpiritualityLayout from './spirituality/SpiritualityLayout'
import PersonalGrowthLayout from './personnalGrowth/PersonalGrowthLayout'
import FictionLayout from './fictionLiterature/FictionLayout'
import NonfictionLayout from './nonfiction/NonfictionLayout'


const BookPageLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderBp></HeaderBp>
      <SpiritualityLayout></SpiritualityLayout>
      <PersonalGrowthLayout></PersonalGrowthLayout>
      <FictionLayout></FictionLayout>
      <NonfictionLayout></NonfictionLayout>
    </div>
  )
}

export default BookPageLayout
