import React from 'react'
import './post.css'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {field: 'id', headerName: 'ID'},
  {field:'title', headerName: 'Title', width:300},
  {field: 'body', headerName: 'Body', width: 600},
  {field:'action', headerName: 'Action', width:250,
  renderCell: (id) => (
    <>
      <Button
        style={{
          backgroundColor: "#ffcc00",
          marginRight: 40,
          padding: "3px 35px"
        }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Edit
      </Button>

      <Button
        style={{
          backgroundColor: "#e8605d",
          padding: "3px 35px"
        }}
        onClick={() => handleDelete(id)}
        variant="contained"
        color="primary"
        type="submit"
      >
        Delete
      </Button>
    </>
  )}
  
]

const Post = ({id,title,body,onDelete}) => {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className='list'>
      <span >{title}</span>
      <span>{body}</span>
      <span>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </div>
  )
}

export default Post