'use client'

import Link from 'next/link'
import { HomeIcon, BookmarkIcon, PaperPlaneIcon, AvatarIcon } from "@radix-ui/react-icons"

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 flex justify-between items-center border-t px-9 bg-white">
      <Link href="/home" className="p-2 rounded">
        <HomeIcon className="w-6 h-6"/>
      </Link>
      <Link href="/favorites" className="p-2 rounded">
        <BookmarkIcon className="w-6 h-6"/>
      </Link>
      <Link href="/explore" className="p-2 rounded">
        <PaperPlaneIcon className="w-6 h-6"/>
      </Link>
      <Link href="/user" className="p-2 rounded">
        <AvatarIcon className="w-6 h-6"/>
      </Link>
    </nav>
  )
}
