import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const PostLoader = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const { postId } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      setErrorMessage('')
      setSuccessMessage('')
      
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        setPost(response.data)
        setSuccessMessage('Post loaded successfully')
      } catch (error) {
        setErrorMessage(`Error when loading your data: ${error}`)
      } finally{
        setLoading(false)
      }
    } 
    fetchPost()
  }, [postId])

  console.log(successMessage)

  return (
    <div>
      <h2>{postId}</h2>
      {loading && <span>Loading...</span>}
      {successMessage && <span style={{color: 'green'}}>{successMessage}</span>}
      {errorMessage && <span style={{color: 'red'}}>{errorMessage}</span>}
      {post && (
        <div>
          <h3>{post.title}</h3>
          <span>{post.body}</span>
        </div>
      )}
    </div>
  )
}
