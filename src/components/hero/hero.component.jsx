import React from "react"

import "./hero.styles.scss"

const Hero = () => (
  <div className="hero-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${"https://i.ibb.co/t8wkn1k/undraw-working-out-6psf-1.png"})`,
      }}
    >
      <div className="content">
        <h1 className="title">Stream now and reach your fitness goals!</h1>
      </div>
    </div>
  </div>
)

export default Hero
