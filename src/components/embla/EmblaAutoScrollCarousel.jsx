import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const EmblaAutoScrollCarousel = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 1 })
  ])

  return (
    <div className="embla__parent h-[58vw] xs:h-52">
      <div className="embla">
        <div className={`embla__viewport`} ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  {slide}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaAutoScrollCarousel
