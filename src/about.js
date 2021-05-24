import React from 'react'
import './about.css'

const About = () => {
  return (
    <article>
      <h1 className='about-us'>About Us</h1>
      <p className='about'>
        Founded in 2010 and based in City, State, our company has served
        customers for the past 10 years and they have always had a great
        experience. We sell top quality furniture that has changed people's
        perspective. It's not just furniture, it's a part of your house, it's a
        part of you.
      </p>
      <div className='container'>
        <h2>Locations</h2>
        <p className='locations'>
          Located in serveral cities across the United States
        </p>
        <ul className='city-list'>
          <li>San Francisco</li>
          <li>New York City</li>
          <li>Miami</li>
          <li>Chicago</li>
        </ul>
      </div>
    </article>
  )
}

export default About
