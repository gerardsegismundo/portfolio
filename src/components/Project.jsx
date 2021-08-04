import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { isMobile } from 'react-device-detect'

import useOnScreen from './../utils/hooks/useOnScreen'
import YongaMobileUrl from '../assets/images/Yonga_grouped_mobile.image.png'
import YongaDesktopUrl from '../assets/images/Yonga_grouped_desktop.image.png'

const Project = ({ props }) => {
  const { title, heading, links, features } = props

  const projectContainerRef = useRef(null)
  const projectRef = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(projectRef)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const projectNodes = projectRef.current.childNodes

      gsap.to(projectNodes, {
        duration: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power4.out'
      })
    }
  }, [reveal])

  return (
    <div
      className='project-container'
      data-scroll-section
      ref={projectContainerRef}
      style={!isMobile && { paddingTop: '8rem' }}
    >
      <div className='project' ref={projectRef}>
        <img
          src={isMobile ? YongaMobileUrl : YongaDesktopUrl}
          data-is-mobile={isMobile}
          alt='project mockups'
          data-scroll
          data-is-reveal={reveal}
        />

        <div className='title-container' data-scroll data-scroll-speed='3'>
          <h2>{title}</h2>
          <h3>{heading}</h3>
          <div className='btn-group'>
            <a href={links.repository} className='btn-primary' rel='noopener noreferrer' target='_blank'>
              View Repo
            </a>

            <a href={links.demo} className='btn-secondary' rel='noopener noreferrer' target='_blank'>
              View Demo
            </a>
          </div>
        </div>
        <section className='features' data-scroll data-scroll-speed='3'>
          <h4>Features</h4>
          <ul>
            {features.map((feature, i) => (
              <li key={title + i}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Project
