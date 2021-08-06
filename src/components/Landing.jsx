import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Landing = () => {
  const nameRef = useRef(null)
  const roleRef = useRef(null)

  useEffect(() => {
    gsap.from([nameRef.current, roleRef.current], {
      duration: 1.8,
      y: 100,
      skewY: 7,
      autoAlpha: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })
  }, [])

  return (
    <div className='landing' data-scroll-section>
      <main>
        <div>
          <h1 ref={nameRef}>Gerard Segismundo</h1>
        </div>
        <div>
          <h2 ref={roleRef}>Ui / Ux Developer</h2>
        </div>
      </main>
    </div>
  )
}

export default Landing
