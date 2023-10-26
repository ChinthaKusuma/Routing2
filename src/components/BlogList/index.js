// import {className} from 'postcss-selector-parser'
import './index.css'
import BlogItem from '../BlogItem'

// Write your JS code here

const BlogList = props => {
  const {details} = props
  return (
    <ul className="bg1">
      {details.map(each => (
        <BlogItem item={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
