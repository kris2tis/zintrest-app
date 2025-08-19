import React from 'react'

export default function Toltip({children , open=false , className=""}) {
  return (
    <div className={ `${className} ${open ? "!block" : "hidden"} z-30 hidden rounded-xl absolute top-10 left-1/2 -translate-x-1/2`}>
      {children}
    </div>
  )
}
