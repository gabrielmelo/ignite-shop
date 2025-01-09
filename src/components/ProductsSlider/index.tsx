"use client"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { Product } from "../Product"

export function ProductsSlider() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 24
    }
  })
  
  return (
    <div className="flex ml-auto w-[calc(100vw-((100vw-1180px)/2))]">
      <div ref={sliderRef} className="keen-slider">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Product />
          </div>
          <div className="keen-slider__slide">
            <Product />
          </div>
          <div className="keen-slider__slide">
            <Product />
          </div>
          <div className="keen-slider__slide">
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
} 