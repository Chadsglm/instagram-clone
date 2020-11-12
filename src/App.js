import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import { db } from "./firebase";



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
  }, []);


  return (
    <div className="App">
      <Header />
      {
        posts.map(({ id, post }) => (
          < Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
