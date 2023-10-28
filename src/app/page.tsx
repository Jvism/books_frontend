async function getBooks() {
  const res = await fetch(`${process.env.API_URL}/book`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getCategories() {
  const res = await fetch(`${process.env.API_URL}/category`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

import ListBooks from "@/components/listBooks"
import BookCard from "@/components/bookCard"
import Categories from "@/components/categories"

export default async function Home() {
  const booksData = await getBooks()
  const categories = await getCategories()
  return (
    <main>
      <Categories categories={categories}/>
      <BookCard book={booksData[0]} type="primary"/>
      {/* <ListBooks books={booksData} title="Vistos" type="secondary" /> */}
      <ListBooks books={booksData.filter(bookData => bookData.id < 10)} title="Recientes" />
    </main>
  )
}
