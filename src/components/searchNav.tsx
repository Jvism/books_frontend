'use client'

import Link from 'next/link'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function SearchNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 flex justify-between items-center px-4 bg-white">
      <span className="font-extrabold text-4xl ml-2 tracking-tighter">
        B.
      </span>
      <Link href="/search" className="p-2 rounded">
        <MagnifyingGlassIcon className="w-6 h-6"/>
      </Link>
    </nav>
  )
}
