import "./App.css"
import { useState } from "react"
import {
  TextField,
  Button,
  Box,
  Table,
  TableRow,
  TableCell,
} from "@mui/material"

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>
}

function App() {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [bookList, setBookList] = useState([])

  const updateTitle = (e) => {
    setBookTitle(e.target.value)
  }

  const updateAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const updatePublisher = (e) => {
    setPublisher(e.target.value)
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

  return (
    <div className="App">
      <BookRepo />
      <TextField
        id={"book-title"}
        label={"Book Title"}
        variant={"outlined"}
        onChange={updateTitle}
        value={bookTitle}
      />
      <TextField
        id={"author"}
        label={"Author"}
        variant={"outlined"}
        onChange={updateAuthor}
        value={author}
      />
      <TextField
        id={"publisher"}
        label={"Publisher"}
        variant={"outlined"}
        onChange={updatePublisher}
        value={publisher}
      />
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
      <Table>
        {bookList.map((book) => (
          <TableRow>
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
