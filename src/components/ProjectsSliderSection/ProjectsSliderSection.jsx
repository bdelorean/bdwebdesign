import React from 'react'
import Title from '../Title'
import Subheading from '../Subheading'
import ImageSlider from './ImageSlider'
import SecondaryButton from "../SecondaryButton"

function ProjectsSliderSection() {
  return (
    <div className='flex flex-col items-center p-24 gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <Title title="Sneak peek  van onze projecten"/>
        <Subheading subheading="Bekijk hoe we andere MKBérs heb geholpen met een krachtige online presence die resultaat oplevert"
        className='w-3/4 text-center mb-6'/>
      </div>
      <ImageSlider />
      <SecondaryButton to="/projecten" text="Bekijk alle projecten"/>
    </div>
  )
}

export default ProjectsSliderSection
