import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from '../utils/helpers/Split3.min.js'

const Landing = () => {
  const nameRef = useRef(null)
  const roleRef = useRef(null)

  useEffect(() => {
    const roleSplit = new SplitText(roleRef.current, { type: 'lines' })
    const nameSplit = new SplitText(nameRef.current, { type: 'lines' })

    gsap.from([nameSplit.lines, roleSplit.lines], {
      duration: 1.5,
      y: 25,
      autoAlpha: 0,
      stagger: 0.5,
      ease: 'power4.out'
    })
  }, [])

  return (
    <div className='landing' data-scroll-section>
      <main>
        <h1 ref={nameRef}>Gerard Segismundo</h1>
        <h2 ref={roleRef}>Ui / Ux Developer</h2>
      </main>
    </div>
  )
}

export default Landing
