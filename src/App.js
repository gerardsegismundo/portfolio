import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import useLocoScroll from './utils/hooks/useLocoScroll'
import { isMobile } from 'react-device-detect'

import Landing from './components/Landing'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

import { yongaProps, tmnyProps } from './utils/helpers/projectProps'

const App = () => {
  // prevents flashing
  useEffect(() => {
    gsap.to('body', { css: { visibility: 'visible' }, duration: 0 })
  }, [])

  useLocoScroll(!isMobile)

  return (
    <>
      <div className='main-container' id='main-container'>
        <Landing />
        <About />
        <Project props={yongaProps} />
        <Project props={tmnyProps} />
        <Contact />
      </div>
    </>
  )
}

export default App
