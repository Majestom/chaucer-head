import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material"

export const BookEntry = (props) => {
  const attribList = [
    { id: "book-title", label: "Book Title", value: props.bookTitle },
    { id: "author", label: "Author", value: props.author },
    { id: "publisher", label: "Publisher", value: props.publisher },
    { id: "price", label: "Price", value: props.price },
  ]

  return (
    <>
      <Box>
        {attribList.map((attrib) => (
          <TextField
            key={attrib.id}
            id={attrib.id}
            label={attrib.label}
            value={attrib.value}
            variant={"outlined"}
            onChange={props.updateCell}
            autoComplete="off"
          />
        ))}
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            onChange={props.toggleFirst}
            label="First Edition"
          />
        </Box>
        <Box m={2} pt={3}>
          <Button
            sx={{
              width: 300,
              color: "warning.dark",
              backgroundColor: "black",
            }}
            onClick={props.addBookHandler}
          >
            Add Book
          </Button>
        </Box>
      </Box>
    </>
  )
}
