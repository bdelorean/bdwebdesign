import React from 'react'
import Hero from '../components/Hero'
import ServicesSlider from '../components/ServicesSlider/ServicesSlider'
import BenefitsSection from '../components/Benefits/BenefitsSection'
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection'
import LastCTA from '../components/LastCTA/LastCTA'
import ProjectsSliderSection from '../components/ProjectsSliderSection/ProjectsSliderSection'


function Home() {
  return (
    <main>
      <Hero/>
      <ServicesSlider />
      <BenefitsSection />
      <HowItWorksSection />
      <ProjectsSliderSection />
      <LastCTA />

      
    </main>
  )
}

export default Home
