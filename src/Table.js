import { DataGrid } from "@mui/x-data-grid"

export const Table = (props) => {
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

  return (
    <>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  )
}
