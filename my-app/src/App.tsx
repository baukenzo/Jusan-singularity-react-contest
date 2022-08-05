import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './components/header/Header';
import { Posts } from './pages/PostsPage/Posts';
import { AddPosts } from './pages/AddPostsPage/AddPosts';
import Appbar from './components/Appbar/Appbar'

function App() {
  return (
    <BrowserRouter>
      <>
         <Appbar/>
        <Routes>
          <Route path='/' element={<Posts/>} />
          <Route path='/addposts' element={<AddPosts/>} />
        </Routes>
      </>
    </BrowserRouter>

  );
}

export default App;
