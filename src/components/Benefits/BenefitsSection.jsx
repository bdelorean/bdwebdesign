import React from 'react'
import BenefitsText from './BenefitsText'
import HexagonGrid from './HexagonGrid'

function BenefitsSection() {
  return (
    <div className='p-10 md:pt-24 md:px-24 flex flex-col md:flex-row justify-between section-benefits'>
      <BenefitsText />
      <HexagonGrid />
    </div>
  )
}

export default BenefitsSection
