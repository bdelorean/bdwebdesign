import React from 'react'
import Title from './Title'
import Webservicescards from './WebServicesCards/Webservicescards'

function WebServices() {
  return (
    <div className='p-10 md:p-24 gap-6 flex flex-col bg-white'>
      <Title title="Webdesign"/>
      <Webservicescards />
    </div>
  )
}

export default WebServices
