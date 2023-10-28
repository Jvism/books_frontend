'use client'

import { Book } from "@/types/types"

interface props {
  books: Book[]
  title: string
  type?: "primary" | "secondary" | "list"
}

import BookCard from "./bookCard"

export default function ListBooks({books, title, type = "list"}: props) {
  return (
    <section>
      <h6 className="mb-3">{ title }</h6>
      <ul className="flex flex-col gap-4">
        {
          books.map(book => {
            return (
              <BookCard key={book.id} type={type} book={book}/>
            )
          })
        }
      </ul>
    </section>
  )
}
