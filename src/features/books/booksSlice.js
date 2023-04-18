import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  books: [
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
  ],
}

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
  },
})

export const { addBook } = booksSlice.actions

export default booksSlice.reducer
