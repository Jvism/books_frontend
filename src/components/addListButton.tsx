'use client'

import { BookmarkIcon } from "@radix-ui/react-icons"

interface props {
  bookId: number
  size?: "small" | "medium" | "large"
}

const sizeStyles = {
  small: {
    button: 'p-[2px]',
    icon: 'w-4 h-4'
  },
  medium: {
    button: 'p-[2px]',
    icon: 'w-5 h-5'
  },
  large: {
    button: 'p-[2px]',
    icon: 'w-[28px] h-[28px]'
  }
}

export default function AddListButton({ bookId, size = "small" }: props) {
  return (
    <button className={sizeStyles[size].button}>
      <BookmarkIcon className={sizeStyles[size].icon}/>
    </button>
  )
}