import React from 'react'
import HomeComp1 from './components/HomeComp1'
import HomeComp2 from './components/HomeComp2'
import HomeComp3 from './components/HomeComp3'
import HomeComp4 from './components/HomeComp4'
import Chef from './components/Chef'
import Component6 from './components/Component6'
import Component7 from './components/Component7'
import Stu from './components/Stu'

const page = () => {
  return (
    <div>
      <HomeComp1 />
      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 />
      <Component6 />
      <Chef />
      
      <Stu />
      <Component7 />
    </div>
  )
}

export default page