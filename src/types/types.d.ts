export interface Author {
  id: number
  name: string
  lastName: string | null
  createdAt: string
  updatedAt: string | null
  books: BookAuthor[]
}

export interface BookAuthor {
  bookId: number
  authorId: number
  popular: boolean
  author: Author
  book?: Book
}

export interface Book {
  id: number
  title: string
  status: string
  publishDate: string
  shortDescription: string
  longDescription: string
  thumbnailUrl: string
  pages: number
  authors: BookAuthor[]
  categories: BookCategory[]
  calification?: string
}

export interface Category {
  id: number
  name: string
}

export interface BookCategory {
  bookId: number
  categoryId: number
  category: Category
}