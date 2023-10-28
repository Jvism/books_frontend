
async function getBook(id: number) {
  const res = await fetch(`${process.env.API_URL}/book/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getNextBook(id: number) {
  const res = await fetch(`${process.env.API_URL}/book/${Number(id) + 1}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getPrevBook(id: number) {
  const res = await fetch(`${process.env.API_URL}/book/${Number(id) - 1}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

import Link from "next/link"
import BookCard from "@/components/bookCard"
import ExpandArea from "@/components/expandArea"
import { RadiobuttonIcon, CalendarIcon, FileTextIcon, DotFilledIcon, ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import type { Book } from "@/types/types"

export default async function Page({ params }: { params: { id: number } }) {
  const book: Book = await getBook(params.id)
  const prevBook: Book = params.id - 1 < 0 ? null : await getPrevBook(params.id)
  const nextBook: Book = await getNextBook(params.id)
  return (
    <main className="pb-5">
      <section className={`flex h-11 mb-3 ${prevBook ? 'justify-between' : 'justify-end'}`}>
        {
          prevBook &&
          <Link href={`${prevBook.id}`} className="flex items-center gap-2">
            <ArrowLeftIcon />
            <span className="max-w-[100px] truncate text-sm font-normal text-neutral-500">{prevBook.title}</span>
          </Link>
        }
        <Link href={`${nextBook.id}`} className="flex items-center gap-2">
          <span className="max-w-[100px] truncate text-sm font-normal text-neutral-500">{nextBook.title}</span>
          <ArrowRightIcon />
        </Link>
      </section>
      <div className="flex flex-col gap-6">
        <BookCard book={book} type="primary"/>
        <section className="flex items-center gap-4 overflow-x-scroll">
          {
            book.categories.map((category, index) => {
              return (
                <>
                  <p key={category.categoryId} className="capitalize whitespace-nowrap font-medium">{ category.category.name }</p>
                  {
                    index + 1 < book.categories.length 
                    &&
                    <DotFilledIcon className="text-neutral-300"/>
                  }
                </>
              )
            })
          }
        </section>
        <section className="flex flex-col gap-3">
          <h6>Características</h6>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <RadiobuttonIcon className="text-neutral-500"/>
              <p>{book.status === "PUBLISH" ? 'Publicado' : 'MEAP'}</p>
            </div>
            <div className="flex gap-1 items-center">
              <CalendarIcon className="text-neutral-500"/>
              <p>{book.publishDate ? (new Date(book.publishDate)).getFullYear() : 'Sin fecha'}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FileTextIcon className="text-neutral-500"/>
              <p>{book.pages ?? 'Sin info'}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <h6>Descripción</h6>
          <ExpandArea text={
            book.longDescription !== "" ? book.longDescription :
            book.shortDescription !== "" ? book.shortDescription : 'Sin Descripción'
          }/>
        </section>
      </div>
    </main>
  )
}