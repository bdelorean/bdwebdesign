import React from 'react'
import Title from '../Title'
import Text from '../Text'
import PrimaryButton from '../PrimaryButton'


function LastCTA() {
  return (
    <div className='bg-[radial-gradient(circle,_rgba(155,28,39,0.8)_0%,_rgba(155,28,39,1)_100%)] pt-24 flex flex-row px-24 items-center'>
        <div className=' '>
          <img src="/images/LastCtaGirl.webp" alt="" className='w-[410px]'/>
        </div>
        <div className='flex flex-col text-center gap-8 items-center'>
            <Title 
            title="Klaar voor de volgende stap?"
            className="text-textWhite"/>
            <Text 
            text="Laten we samen uw plannen bespreken en kijken hoe we een website kunnen maken die uw onderneming goed vertegenwoordigt."
            className="text-textWhite/80 w-4/5"/>
            <PrimaryButton 
            to="/contact"
            text="Neem contact op"
            className="bg-textWhite !text-accent font-semibold w-fit shadow-[0_4px_4px_rgba(0,0,0,0.25)]"/>
        </div>

    </div>
    
  )
}

export default LastCTA
