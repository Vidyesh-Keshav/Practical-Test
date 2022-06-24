import React from 'react'

const CreatePost = ({onCreate}) => {

const handleOnSubmit = (e) => {
  e.preventDefault();
  onCreate(e.target.title.value,e.target.body.value);
  e.target.title.value = "";
  e.target.body.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Create Post</h3>
        <input placeholder='Title' name='title'/>
        <input placeholder='Body' name='body'/>
        <button onSubmit={handleOnSubmit}>Create</button>
      </form>
        
    </div>
  )
}

export default CreatePost