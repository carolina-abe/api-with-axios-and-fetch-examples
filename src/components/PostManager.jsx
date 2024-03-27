import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostForm } from './PostForm'

export const PostManager = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleSuccess = (post, operation) => {
    // refactor this with switch
    if(operation === 'add'){
        setPosts((curPosts) => [post, ...curPosts])
      } else if(operation === 'update') {
        setPosts((curPosts) => curPosts.map(p => p.id === post.id ? post : p))
      } else if(operation === 'delete') {
        setPosts((curPosts) => curPosts.filter(p => p.id !== post.id))
        setSelectedPost(null)
      }
   setIsEditing(false)
}
  // refactor this 
  const handleEdit = (post) => {
    setSelectedPost(post)
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setSelectedPost(null)
    setIsEditing(false)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        setPosts(response.data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h2>Posts management</h2>
      <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSuccess}/>
      {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
      <h2>Posts</h2>
      {posts.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
                <button onClick={() => handleEdit(post)}>Edit</button>
              </div>
            )
          )}
    </div>
  )
}
 