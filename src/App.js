import "./App.css";
import { TextField } from "@mui/material";

const BookRepo = () => {
  return <h1>Chaucer Head Book Repository</h1>;
};

const EntryTable = () => {
  const textFieldData = [
    { id: "book-title", label: "Book Title", variant: "outlined" },
    { id: "author", label: "Author", variant: "outlined" },
    { id: "publisher", label: "Publisher", variant: "outlined" },
  ];
  // Not sure about this.
  return textFieldData.map((book) => (
    <TextField id={book.id} label={book.label} variant={book.variant} />
  ));
};

function App() {
  return (
    <div className="App">
      <BookRepo />
      <EntryTable />
      {/* <TextField id="book-title" label="Book Title" variant="outlined" />
      <br />
      <TextField id="author" label="Author" variant="outlined" />
      <br />
      <TextField id="publisher" label="Publisher" variant="outlined" /> */}
    </div>
  );
}

export default App;
