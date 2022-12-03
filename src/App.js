import "./App.css"
import { useState } from "react"
import {
  TextField,
  Button,
  Box,
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
  const [price, setPrice] = useState("")
  const [first, setFirst] = useState(false)

  // For DataGrid:
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
              Style={"max-width:100%; max-height:100%;"}
            />
          </>
        )
      },
    },
    { field: "title", headerName: "Title", width: 250 },
    { field: "author", headerName: "Author", width: 250 },
    { field: "publisher", headerName: "Publisher", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "first", headerName: "First Ed", width: 80 },
  ]

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

  const toggleFirst = () => {
    setFirst(!first)
  }

  const attribList = [
    { id: "book-title", label: "Book Title", value: bookTitle },
    { id: "author", label: "Author", value: author },
    { id: "publisher", label: "Publisher", value: publisher },
    { id: "price", label: "Price", value: price },
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
          <FormControlLabel
            control={<Checkbox />}
            onChange={toggleFirst}
            label="First Edition"
          />
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
    </div>
  )
}

export default App
