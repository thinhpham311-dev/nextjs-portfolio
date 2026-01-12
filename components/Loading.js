import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const LoadingImage = (props) => (
  <>
    <LazyLoadImage
      className={props.className}
      effect="blur"
      alt={props.alt}
      style={props.styles}
      src={props.src}
      width={props.width}
      height={props.height}
    />
  </>
)

export { LoadingImage }
