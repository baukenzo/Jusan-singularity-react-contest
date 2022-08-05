import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './components/header/Header';
import { Posts } from './pages/PostsPage/Posts';
import { AddPosts } from './pages/AddPostsPage/AddPosts';

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="App">
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Posts/>} />
          <Route path='/addposts' element={<AddPosts/>} />
        </Routes>
      </>
    </BrowserRouter>

  );
}

export default App;
