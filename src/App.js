import "./App.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Table } from "./Table"
import { BookEntry } from "./BookEntry"
import { addBook } from "./features/books/booksSlice"

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>
}

function App() {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [price, setPrice] = useState("")
  const [first, setFirst] = useState(false)

  const books = useSelector((state) => state.book.books)
  const dispatch = useDispatch()

  const addBookHandler = () => {
    dispatch(
      addBook({
        id: books.slice(-1)[0].id + 1,
        cover: {
          avatar:
            "https://www.lspace.org/ftp/images/bookcovers/uk/strata-2.jpg",
          title: "Strata",
        },
        title: bookTitle,
        author: author,
        publisher: publisher,
        price: price,
        first: first,
      })
    )

    setBookTitle("")
    setAuthor("")
    setPublisher("")
    setPrice("")
    setFirst(false)
  }

  const updateCell = (e) => {
    if (e.target.id === "book-title") {
      setBookTitle(e.target.value)
    } else if (e.target.id === "author") {
      setAuthor(e.target.value)
    } else if (e.target.id === "publisher") {
      setPublisher(e.target.value)
    } else if (e.target.id === "price") {
      setPrice(e.target.value)
    } else if (e.target.id === "first") {
      setFirst(e.target.value)
    }
  }

  const toggleFirst = () => {
    setFirst(!first)
  }

  return (
    <div className="App">
      <BookRepo />
      <BookEntry
        bookTitle={bookTitle}
        author={author}
        publisher={publisher}
        price={price}
        updateCell={updateCell}
        toggleFirst={toggleFirst}
        addBookHandler={addBookHandler}
      />
      <div style={{ height: 350, width: "100%" }}>
        <Table
          rows={books}
          addBook={addBook}
          bookTitle={bookTitle}
          author={author}
          publisher={publisher}
          price={price}
          first={first}
        />
      </div>
    </div>
  )
}

export default App
