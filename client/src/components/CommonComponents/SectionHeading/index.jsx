import React from 'react'

const SectionHeading = ({tile,subTitle}) => {
  return (
    <div className=' text-center space-y-2'>
        <h3 className=' uppercase text-gray-400'>{subTitle}</h3>
        <h2 className=' text-3xl font-medium text-gray-900'>{tile}</h2>
    </div>
  )
}

export default SectionHeading