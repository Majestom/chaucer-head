import "./App.css"
import { useState } from "react"
import {
  TextField,
  Button,
  Box,
  Table,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material"

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>
}

function App() {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [bookList, setBookList] = useState([])

  const updateCell = (e) => {
    if (e.target.id === "book-title") {
      setBookTitle(e.target.value)
    } else if (e.target.id === "author") {
      setAuthor(e.target.value)
    } else if (e.target.id === "publisher") {
      setPublisher(e.target.value)
    }
  }

  const addBook = () => {
    setBookList([
      ...bookList,
      { title: bookTitle, author: author, publisher: publisher },
    ])
    setBookTitle("")
    setAuthor("")
    setPublisher("")
  }

  const attribList = [
    { id: "book-title", label: "Book Title", value: bookTitle },
    { id: "author", label: "Author", value: author },
    { id: "publisher", label: "Publisher", value: publisher },
  ]

  return (
    <div className="App">
      <BookRepo />
      <Box>
        {attribList.map((attrib) => (
          <TextField
            key={attrib.id}
            id={attrib.id}
            label={attrib.label}
            value={attrib.value}
            variant={"outlined"}
            onChange={updateCell}
            autoComplete="off"
          />
        ))}
      </Box>
      <Box m={2} pt={3}>
        <Button
          sx={{
            width: 300,
            color: "warning.dark",
            backgroundColor: "black",
          }}
          onClick={addBook}
        >
          Add Book
        </Button>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {attribList.map((attrib) => (
              <TableCell key={attrib.label}>{attrib.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {bookList.map((book) => (
          <TableRow
            key={book.title}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.publisher}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  )
}

export default App
