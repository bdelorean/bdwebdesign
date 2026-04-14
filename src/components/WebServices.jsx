import React from 'react'
import Title from './Title'
import Webservicescards from './WebServicesCards/Webservicescards'

function WebServices() {
  return (
    <div className='px-6 py-16 md:p-24 gap-8 md:gap-6 flex flex-col bg-white'>
      <Title title="Webdesign"/>
      <Webservicescards />
    </div>
  )
}

export default WebServices
