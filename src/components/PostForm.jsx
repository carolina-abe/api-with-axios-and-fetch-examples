import { useEffect, useState} from 'react'
import axios from 'axios'

export const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || '')
  const [body, setBody] = useState(post?.body || '')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {title, body, userId: 1}

    try {
      if(post){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost)

        onSuccess(response.data, 'update')
      } else {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)

      onSuccess(response.data, 'add')
      }

      // separate this in a function
      setTitle('')
      setBody('')
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)

      onSuccess(post, 'delete')
      setTitle('')
      setBody('')
    } catch (error) {
      console.log('Delete error: ', error)
    }
  }

  useEffect(() => {
    if(post) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          value={title} 
          placeholder='Enter the title' 
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea 
          value={body} 
          placeholder='Enter the content...' 
          onChange={e => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Edit</button>
      {post && (
          <button type='button' onClick={handleDelete}>Delete</button>
      )}
    </form>
  )
}
