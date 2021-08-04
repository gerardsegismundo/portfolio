import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import useOnScreen from './../utils/hooks/useOnScreen'
import SplitText from '../utils/helpers/Split3.min.js'
import { isMobile } from 'react-device-detect'

import { ReactComponent as QuoteLeft } from '../assets/svg/QuoteLeft.svg'

const About = () => {
  const contentRef = useRef(null)
  const titleRef = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(contentRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const tl = gsap.timeline()

      const contentSplit = new SplitText(contentRef.current, { type: 'lines' })
      const titleSplit = new SplitText(titleRef.current, { type: 'lines' })

      tl.from(titleSplit.lines, {
        duration: 3,
        y: 150,
        autoAlpha: 0,
        stagger: 0.1,
        ease: 'power4.out'
      }).from(
        contentSplit.lines,
        {
          duration: 1,
          y: 25,
          autoAlpha: 0,
          stagger: 0.1,
          ease: 'power4.out'
          // onComplete: () => split.revert(),
        },
        '-=2.5'
      )
    }
  }, [reveal])

  return (
    <div className='about' data-scroll-section style={!isMobile && { paddingBottom: '8rem' }}>
      <div className='about-container'>
        <p className='content' ref={contentRef} data-reveal={reveal} data-scroll data-scroll-speed='2'>
          <span>UI / UX Developer</span> who cares deeply about user experience. <br />
          Serious passion for coding and new technologies.
        </p>

        <h2 ref={titleRef} data-reveal={reveal}>
          About
        </h2>
      </div>
      {!isMobile && (
        <>
          <p className='love' data-scroll data-scroll-speed='3' data-scroll-direction='horizontal'>
            <QuoteLeft />
            Do what you love. Love what you do.
          </p>
        </>
      )}
    </div>
  )
}

export default About
