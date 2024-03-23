import { useState, useEffect } from 'react'

export const FetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        const data = await response.json() // transforms response in json object

        setPosts(data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchPosts()
  }, [])

  /** Fetch is javascript native */
  return (
    <div>
      <h2>Posts (Fetch API)</h2>
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
