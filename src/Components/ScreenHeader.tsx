import React from 'react'

interface ScreenHeaderProps{
    headerText:string
}

export default function ScreenHeader(props:ScreenHeaderProps) {
    const{headerText}=props
  return (
    <div className="flex flex-row justify-center items-center mx-auto mb-6 gap-x-4">
    <div className="text-4xl xs:text-2xl font-medium mb-3">
      {headerText}
    </div>
    <div className="animate-bounce text-4xl">👇</div>
  </div>
  )
}
