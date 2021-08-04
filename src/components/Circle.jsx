import { useEffect, useRef } from 'react'

import CircleType from '../utils/helpers/CircleType.min'

import { ReactComponent as DownArrow } from '../assets/svg/ArrowDown.svg'

const Circle = () => {
  const circularRef = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const circleType = new CircleType(circularRef.current).radius(41.25)

    let offset = window.scrollTop

    console.log(offset)
    // $(window).scroll(function () {
    //   var offset = $(window).scrollTop()
    //   offset = offset * 0.4

    //   $('.circular-text').css({
    //     '-moz-transform': 'rotate(' + offset + 'deg)',
    //     '-webkit-transform': 'rotate(' + offset + 'deg)',
    //     '-o-transform': 'rotate(' + offset + 'deg)',
    //     '-ms-transform': 'rotate(' + offset + 'deg)',
    //     transform: 'rotate(' + offset + 'deg)'
    //   })
    // })
  }, [])
  return (
    <div className='circle-text'>
      <span ref={circularRef} style={{ color: 'white', letterSpacing: '.25rem', fontSize: '.75rem' }}>
        VIEW • PROJECTS •
      </span>
      <DownArrow />
    </div>
  )
}

export default Circle
