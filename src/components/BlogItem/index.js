import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item">
        <div className="blog-image-container">
          <img src={imageUrl} alt="blogItemImage" className="blog-item-img" />
        </div>

        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="item-topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
