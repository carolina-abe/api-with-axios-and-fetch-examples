import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostForm } from './PostForm'

export const PostManager = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

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
      <PostForm />
      <h2>Posts</h2>
      {posts.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
                <button>Edit</button>
              </div>
            )
          )}
    </div>
  )
}
 