import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FetchPosts } from './components/FetchPosts'
import { AxiosPosts } from './components/AxiosPosts'
import { PostManager } from './components/PostManager'
import { PostLoader } from './components/PostLoader'

function App() {
  return (
    <BrowserRouter>
    <h1>GET with Fetch and Axios</h1>
    <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
      <Link to='/fetch-posts'>Fetch Posts</Link>
      <Link to='/axios-posts'>Axios Posts</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/post/1'>Post 1</Link>
    </div>
      <Routes>
        <Route path='/fetch-posts' element={<FetchPosts />}/>
        <Route path='/axios-posts' element={<AxiosPosts />}/>
        <Route path='/posts' element={<PostManager />}/>
        <Route path='/post/:postId' element={<PostLoader />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
