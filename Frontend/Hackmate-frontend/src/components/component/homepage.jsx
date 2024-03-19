import React from 'react'
import { HeroSection } from './HeroSection'
import { SpecialOpp } from './SpecialOpp'
import { Information } from './Information'
import {Footer} from './Footer'

export function HomePage ()  {
  return (
    <div>
    <HeroSection/>
    <SpecialOpp/>
    <Information/>
    <Footer/>
    </div>
  )
}

