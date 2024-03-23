import { useState, useEffect } from 'react'
import axios from 'axios'

export const AxiosPosts = () => {
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

  /** Fetch is javascript native */
  return (
    <div>
      <h2>Posts (Axios API)</h2>
      {error ? ( // TODO: refactor this validation
        <p>Error: {error}</p>) : (
            posts.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
              </div>
            ))
          )}
    </div>
  )
}
