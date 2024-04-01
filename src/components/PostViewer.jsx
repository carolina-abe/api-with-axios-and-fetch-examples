import { useParams } from 'react-router-dom'
import useHttp from '../hooks/useHttp'

export const PostViewer = () => {
  const { postId } = useParams()

  const { 
    data: post, 
    error, 
    loading } = useHttp(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      'GET',
      null
      )

  return (
    <div>
       <h2>{postId}</h2>
      {loading && <span>Loading...</span>}
      {error && <span style={{color: 'red'}}>{error}</span>}
      {post && (
        <div>
          <h3>{post.title}</h3>
          <span>{post.body}</span>
        </div>
      )}
    </div>
  )
}
