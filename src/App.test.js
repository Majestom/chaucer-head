import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders 'Book Title'", () => {
  render(<App />)
  const bookTitle = screen.getByLabelText(/Book Title/i)
  expect(bookTitle).toBeInTheDocument()
})
