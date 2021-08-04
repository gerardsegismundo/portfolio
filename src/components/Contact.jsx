import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import useOnScreen from './../utils/hooks/useOnScreen'
import SplitText from '../utils/helpers/Split3.min.js'

import { ReactComponent as Email } from '../assets/svg/Email.svg'
import { ReactComponent as GitHub } from '../assets/svg/GitHub.svg'
import { ReactComponent as Instagram } from '../assets/svg/Instagram.svg'
import { ReactComponent as LinkedIn } from '../assets/svg/LinkedIn.svg'
import { ReactComponent as EmailOutline } from '../assets/svg/EmailOutline.svg'
import { ReactComponent as Phone } from '../assets/svg/PhoneOutline.svg'

const Contact = () => {
  const iconsContainerRef = useRef(null)
  const titleRef = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(iconsContainerRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const tl = gsap.timeline()

      const titleSplit = new SplitText(titleRef.current, { type: 'lines' })
      const childNodes = iconsContainerRef.current.childNodes

      tl.from(titleSplit.lines, {
        duration: 3,
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        ease: 'power4.out'
      }).to(
        [childNodes, 'footer'],
        {
          duration: 1,
          autoAlpha: 1,
          stagger: 0.2,
          ease: 'power4.out'
          // onComplete: () => split.revert(),
        },
        '-=3'
      )
    }
  }, [reveal])

  const handleOnEmail = () => {
    window.location.href = 'mailto:gerardmartinsegismundo@gmail.com'
  }

  return (
    <div className='contact' data-scroll-section>
      <h2 ref={titleRef}>Contact</h2>

      <div className='icons-container' ref={iconsContainerRef}>
        <span data-scroll data-scroll-speed='2'>
          <Email onClick={handleOnEmail} data-scroll data-scroll-speed='2' />
        </span>
        <a
          href='https://github.com/gerardsegismundo'
          rel='noopener noreferrer'
          target='_blank'
          data-scroll
          data-scroll-speed='2'
        >
          <GitHub />
        </a>
        <a
          href='https://www.instagram.com/gerardsegismundo/'
          rel='noopener noreferrer'
          target='_blank'
          data-scroll
          data-scroll-speed='2'
        >
          <Instagram />
        </a>
        <a
          href='https://www.linkedin.com/in/gerard-martin-segismundo-601803165/'
          rel='noopener noreferrer'
          target='_blank'
          data-scroll
          data-scroll-speed='2'
        >
          <LinkedIn />
        </a>
      </div>

      <footer>
        <EmailOutline />
        <p>gerardmartinsegismundo@gmail.com</p>
        <Phone />
        <p>+1 (805) 790 6378</p>
      </footer>
    </div>
  )
}

export default Contact
