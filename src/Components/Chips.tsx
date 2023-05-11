import React from 'react'
import { TechStack } from '../Utils/MyData'

export default function Chips({chipText}:{chipText:TechStack[]}) {
  return (
    <>
    
    {
        chipText.map((techStack,index)=>(<>
        <span key={index} className="inline-block bg-gradient-to-r from-teal-600 via-teal-300 to-cyan-500 text-dark rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2">🚀{' '}{techStack}</span>
        </>))
    }
    </>
  )
}
