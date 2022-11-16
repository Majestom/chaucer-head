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
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>
}

function App() {
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [bookList, setBookList] = useState([])

  // For DataGrid:
  const rows = [
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
    },
  ]

  // For DataGrid:
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "cover",
      headerName: "Cover",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            <img
              alt={params.value.title}
              src={params.value.avatar}
              Style="max-width:100%; max-height:100%;"
            />
          </>
        )
      },
    },
    { field: "title", headerName: "Title", width: 250 },
    { field: "author", headerName: "Author", width: 250 },
    { field: "publisher", headerName: "Publisher", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ]

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
        <Box>
          <FormControlLabel control={<Checkbox />} label="First Edition" />
        </Box>
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
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
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
