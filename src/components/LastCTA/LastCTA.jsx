import React, { useEffect } from 'react'
import Title from '../Title'
import Text from '../Text'
import PrimaryButton from '../PrimaryButton'


function LastCTA() {
  useEffect(() => {
    // Reveal the mobile CTA background and content on scroll
    const elements = document.querySelectorAll('.last-cta-mobile .reveal-fade, .last-cta-mobile .reveal-up')

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className='hidden bg-[radial-gradient(circle,_rgba(155,28,39,0.8)_0%,_rgba(155,28,39,1)_100%)] md:flex md:flex-row md:px-24 md:pt-24 items-center'>
        <div>
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

      <div className='last-cta-mobile md:hidden bg-[radial-gradient(circle,_rgba(155,28,39,0.8)_0%,_rgba(155,28,39,1)_100%)] '>
        <div
          className="reveal-fade min-h-[90vh]  bg-cover bg-[center_top] bg-no-repeat flex items-end overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(14, 24, 42, 0.92) 0%, rgba(14, 24, 42, 0.72) 24%, rgba(14, 24, 42, 0.32) 48%, rgba(14, 24, 42, 0) 68%), url('/images/LastCtaGirl.webp')",
          }}
        >
          <div className='reveal-up flex flex-col text-center gap-6 items-center px-6 pb-16 pt-24'>
            <Title 
              title="Klaar voor de volgende stap?"
              className="text-textWhite"/>
            <Text 
              text="Plan een vrijblijvend gesprek en ontdek de mogelijkheden voor uw website."
              className="text-textWhite/85 w-[88%] leading-7"/>
            <PrimaryButton 
              to="/contact"
              text="Neem contact op"
              className="bg-textWhite !text-accent font-semibold w-fit shadow-[0_4px_4px_rgba(0,0,0,0.25)]"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastCTA
