import { useState} from 'react'
import axios from 'axios'

export const PostForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
  }

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
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <button type='submit'>Edit</button>
    </form>
  )
}
