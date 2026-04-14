import React from 'react'
import BenefitsText from './BenefitsText'
import HexagonGrid from './HexagonGrid'
import BenefitsCardsMobile from './BenefitsCardsMobile'

function BenefitsSection() {
  return (
    <div className='px-6 py-16 md:pt-24 md:px-24 flex flex-col gap-10 md:flex-row md:gap-16 justify-between section-benefits'>
      <BenefitsText />
      <BenefitsCardsMobile />
      <HexagonGrid />
    </div>
  )
}

export default BenefitsSection
