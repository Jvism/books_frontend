import Link from 'next/link'
import Image from 'next/image'
import AddListButton from './addListButton'
import QualifyButton from './qualifyButton'
import ReadButton from './readButton'
import { ImageIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Book } from '@/types/types'

interface props {
  type: "primary" | "secondary" | "list"
  book: Book
}

const stylesCard = {
  primary: {
    thunbmail: {
      link: 'min-w-[120px]',
      img: {
        width: 120,
        height: 153
      }
    },
    title: '!font-semibold text-[32px] leading-[30px]',
    buttons: 'medium',
    authors: 'text-base font-medium'
  },
  secondary: {
    thunbmail: {
      link: 'min-w-[100px]',
      img: {
        width: 100,
        height: 120
      }
    },
    title: 'font-medium',
    buttons: 'small',
    authors: 'text-sm font-normal'
  },
  list: {
    thunbmail: {
      link: 'min-w-[56px]',
      img: {
        width: 56,
        height: 80
      }
    },
    title: 'font-medium',
    buttons: 'small',
    authors: 'text-sm font-normal'
  }
}

export default function BookCard({type, book}: props) {
  return (
    <li className="flex gap-4">
      <Link href={`/book/${book.id}`} className={stylesCard[type].thunbmail.link}>
        {book.thumbnailUrl ?
          <Image src={book.thumbnailUrl } alt="" width={stylesCard[type].thunbmail.img.width} height={stylesCard[type].thunbmail.img.height}/>
          :
          <div className="w-14 h-20 min-w-[56px] bg-neutral-200 text-neutral-500 p-1 flex flex-col items-center justify-center">
            <ImageIcon />
            <span className="text-center text-xs">Image not found</span>
          </div>
        }
      </Link>
      <div className="flex flex-col gap-[6px]">
        <Link href={`/book/${book.id}`}>
          <h6 className={stylesCard[type].title}>{book.title}</h6>
        </Link>
        <div className="flex flex-wrap gap-x-2">
          { book.authors &&
            book.authors.map(authorData => {
              return (
                <Link
                  key={authorData.author.id}
                  href={`/author/${authorData.author.id}`}
                  className={`flex gap-[2px] items-center capitalize text-neutral-500 tracking-tighter ${stylesCard[type].authors}`}
                >
                  <span className="whitespace-nowrap max-w-[250px]">
                    {authorData.author.name}
                  </span>
                  <ChevronRightIcon />
                </Link>
              )
            })
          }
        </div>
        <div className="flex gap-2">
          <ReadButton bookId={book.id} size={type === 'primary' ? "medium" : "small"}/>
          <QualifyButton bookId={book.id} size={type === 'primary' ? "medium" : "small"}/>
          <AddListButton bookId={book.id} size={type === 'primary' ? "medium" : "small"}/>
        </div>
      </div>
    </li>
  )
}