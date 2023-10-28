
async function getAuthor(id: number) {
  const res = await fetch(`${process.env.API_URL}/author/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getNextAuthor(id: number) {
  const res = await fetch(`${process.env.API_URL}/author/${Number(id) + 1}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getPrevAuthor(id: number) {
  const res = await fetch(`${process.env.API_URL}/author/${Number(id) - 1}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

function getUniqueBookCategories(author: Author): Category[] {
  const categories: Category[] = [];

  author.books.forEach(bookAuthor => {
    if (bookAuthor.book) {
      bookAuthor.book.categories.forEach(bookCategory => {
        if (!categories.find(category => category.id === bookCategory.category.id)) {
          categories.push(bookCategory.category);
        }
      });
    }
  });

  return categories;
}

import Link from "next/link"
import BookCard from "@/components/bookCard"
import ListBooks from "@/components/listBooks"
import ExpandArea from "@/components/expandArea"
import { DotFilledIcon, ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import type { Author, Category } from "@/types/types"

export default async function Page({ params }: { params: { id: number } }) {
  const author: Author = await getAuthor(params.id)
  const prevAuthor: Author = params.id - 1 < 0 ? null : await getPrevAuthor(params.id)
  const nextAuthor: Author = await getNextAuthor(params.id)

  const categories = getUniqueBookCategories(author)
  const books = author.books.map(bookAuthor => bookAuthor.book)
  return (
    <main className="pb-5">
      <section className={`flex h-11 mb-3 ${prevAuthor ? 'justify-between' : 'justify-end'}`}>
        {
          prevAuthor &&
          <Link href={`${prevAuthor.id}`} className="flex items-center gap-2">
            <ArrowLeftIcon />
            <span className="max-w-[100px] truncate text-sm font-normal text-neutral-500 capitalize">{prevAuthor.name}</span>
          </Link>
        }
        <Link href={`${nextAuthor.id}`} className="flex items-center gap-2">
          <span className="max-w-[100px] truncate text-sm font-normal text-neutral-500 capitalize">{nextAuthor.name}</span>
          <ArrowRightIcon />
        </Link>
      </section>
      <div className="flex flex-col gap-6">
        <h6 className="text-[32px] font-semibold capitalize leading-[30px]">{author.name}</h6>
        <section className="flex items-center gap-4 overflow-x-scroll">
          {
            categories.map((category, index) => {
              return (
                <>
                  <p key={category.id} className="capitalize whitespace-nowrap font-medium">{ category.name }</p>
                  {
                    index + 1 < categories.length 
                    &&
                    <DotFilledIcon className="text-neutral-300"/>
                  }
                </>
              )
            })
          }
        </section>
        <section className="flex flex-col gap-3">
          <h6>Biografía</h6>
          <ExpandArea text={
            "Sin biografía"
          }/>
        </section>
        <section>
          <ListBooks title="Mas popular" books={books.filter((book, index) => index === 0)} type="primary"/>
        </section>
        <section>
          <ListBooks title="Todos sus libros" books={books}/>
        </section>
      </div>
    </main>
  )
}