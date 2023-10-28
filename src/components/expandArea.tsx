'use client'

interface props {
  text: string
  size?: "small" | "medium" | "large"
}

const stylesSize = {
  small: 'max-h-[140px]',
  medium: 'max-h-[200px]',
  large: 'max-h-[270px]',
  
}

import { useState } from "react"

export default function ExpandArea({text, size = "small"}: props) {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className={`${expand ? 'h-fit' : stylesSize[size]} overflow-hidden`}>
        {text}
      </p>
      <button className="px-2 py-1 font-medium" onClick={handleClick}>
        { expand ? 'Leer menos' : 'Leer más' }
      </button>
    </div>
  )
}