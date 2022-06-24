import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react'
import './App.css';
import CreatePost from './components/CreatePost';
import Post from './components/Post'

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => {
      console.log(err);
    })
  }

  const onCreate = async(title,body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method : 'POST',
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
    .then((res) => {
      if(res.status !== 201){
        return
      }else{
        return res.json();
      }
    })
    .then((data) => {
      setPosts((posts) => [...posts,data])
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE'
    })
    .then((res) => {
      if(res.status !== 200){
        return
      }else{
        setPosts(posts.filter((post) => {
          return post.id !== id;
        }))
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(posts)

  return (
    <div className='App'>
      <h3>DASHBOARD</h3>

      <br />
      <CreatePost onCreate={onCreate}/>
      <div>
        {
          posts.map((post) => (
            <Post 
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
            onDelete={onDelete} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
