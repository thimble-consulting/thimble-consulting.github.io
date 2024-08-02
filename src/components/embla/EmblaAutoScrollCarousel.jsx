import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const EmblaAutoScrollCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 1 })
  ])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{slide}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaAutoScrollCarousel
