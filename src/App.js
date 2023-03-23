import "./App.css"
import { useState } from "react"
import { Table } from "./Table"
import { BookEntry } from "./BookEntry"

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>
}

function App() {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [price, setPrice] = useState("")
  const [first, setFirst] = useState(false)

  const [rows, setRows] = useState([
    {
      id: 1,
      cover: {
        avatar: "https://www.lspace.org/ftp/images/bookcovers/uk/strata-2.jpg",
        title: "Strata",
      },
      title: "Strata",
      author: "Terry Pratchett",
      publisher: "Orbit",
      price: "£1.00",
      first: "false",
    },
    {
      id: 2,
      cover: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/7/71/Ringworld%281stEd%29.jpg",
        title: "Ringworld",
      },
      title: "Ringworld",
      author: "Larry Niven",
      publisher: "Orion",
      price: "£2.00",
      first: "false",
    },
  ])

  const addBook = () => {
    setRows([
      ...rows,
      {
        id: rows.slice(-1)[0].id + 1,
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
      },
    ])
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
        addBook={addBook}
      />

      <div style={{ height: 350, width: "100%" }}>
        <Table
          rows={rows}
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
