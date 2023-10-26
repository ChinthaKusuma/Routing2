// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {id, title, description, publishedDate} = item

  return (
    <li className="li1">
      <div className="one">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>

      <div>
        <p>{description}</p>
      </div>
      <hr />
    </li>
  )
}
export default BlogItem
