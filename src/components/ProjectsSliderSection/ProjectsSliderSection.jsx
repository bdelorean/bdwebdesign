import React from 'react'
import Title from '../Title'
import Subheading from '../Subheading'
import ImageSlider from './ImageSlider'
import SecondaryButton from "../SecondaryButton"

function ProjectsSliderSection() {
  return (
    <div className='flex flex-col items-center px-6 py-16 md:p-24 gap-8'>
      <div className='flex flex-col items-center gap-4 md:gap-5'>
        <Title title="Sneak peek  van onze projecten" className='text-center'/>
        <Subheading subheading="Bekijk hoe we andere MKB'ers hebben geholpen met een krachtige online presence die resultaat oplevert"
        className='md:w-3/4 text-center mb-6'/>
      </div>
      <ImageSlider />
      <SecondaryButton to="/projecten" text="Bekijk alle projecten"/>
    </div>
  )
}

export default ProjectsSliderSection
