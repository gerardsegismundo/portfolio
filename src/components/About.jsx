import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import useOnScreen from './../utils/hooks/useOnScreen'
import SplitText from '../utils/helpers/Split3.min.js'
import { isMobile } from 'react-device-detect'

import { ReactComponent as QuoteLeft } from '../assets/svg/QuoteLeft.svg'
import { ReactComponent as Twemoji } from '../assets/svg/Twemoji.svg'

const About = () => {
  const contentRef = useRef(null)
  const aboutRef = useRef(null)
  const quoteRef = useRef(null)
  const quoteLeftRef = useRef(null)
  const twemojiRef = useRef(null)

  const [reveal, setReveal] = useState(false)
  const [quoteReveal, setQuoteReveal] = useState(false)

  const onScreen = useOnScreen(contentRef)

  const quoteOnScreen = useOnScreen(quoteRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (quoteOnScreen) setQuoteReveal(quoteOnScreen)
  }, [quoteOnScreen])

  useEffect(() => {
    if (reveal) {
      const tl = gsap.timeline()

      const contentSplit = new SplitText(contentRef.current, { type: 'lines' })

      tl.from(aboutRef.current, {
        duration: 3,
        y: 150,
        autoAlpha: 0,
        ease: 'power4.out'
      }).from(
        contentSplit.lines,
        {
          duration: 1,
          y: 25,
          autoAlpha: 0,
          stagger: 0.1,
          ease: 'power4.out',
          onComplete: () => contentSplit.revert()
        },
        '-=2.5'
      )
    }
  }, [reveal])

  useEffect(() => {
    if (quoteReveal) {
      const quoteSplit = new SplitText(quoteRef.current, { type: 'chars' })

      gsap.from([quoteLeftRef.current, quoteSplit.chars, twemojiRef.current], {
        autoAlpha: 0,
        y: 30,
        duration: 1,
        stagger: 0.075,
        ease: 'back.out(1.7)',
        onComplete: () => quoteSplit.revert()
      })
    }
  }, [quoteReveal])

  return (
    <div className='about' data-scroll-section style={{ paddingBottom: !isMobile ? '8rem' : 0 }}>
      <div className='about-container'>
        <p className='content' ref={contentRef} data-reveal={reveal} data-scroll data-scroll-speed='2'>
          <span>UI / UX Developer</span> who cares deeply about user experience. <br />
          Serious passion for coding and new technologies.
        </p>

        <h2 ref={aboutRef} data-reveal={reveal}>
          About
        </h2>
      </div>
      {!isMobile && (
        <>
          <p className='love' data-scroll data-scroll-speed='3' data-scroll-direction='horizontal' ref={quoteRef}>
            <QuoteLeft ref={quoteLeftRef} />
            Do what you love. Love what you do.
            <Twemoji ref={twemojiRef} />
          </p>
        </>
      )}
    </div>
  )
}

export default About
