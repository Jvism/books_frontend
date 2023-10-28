'use client'

import { CheckIcon } from "@radix-ui/react-icons"

interface props {
  bookId: number
  size?: "small" | "medium" | "large"
}

const sizeStyles = {
  small: {
    button: 'p-[1px]',
    icon: 'w-[18px] h-[18px]'
  },
  medium: {
    button: 'p-[1px]',
    icon: 'w-[24px] h-[24px]'
  },
  large: {
    button: 'p-[2px]',
    icon: 'w-[28px] h-[28px]'
  }
}

export default function ReadButton({ bookId, size = "small" }: props) {
  return (
    <button className={sizeStyles[size].button}>
      <CheckIcon className={sizeStyles[size].icon}/>
    </button>
  )
}