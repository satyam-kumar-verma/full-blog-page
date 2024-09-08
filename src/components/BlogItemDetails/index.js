import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogItemdetailsData()
  }

  getBlogItemdetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const blogdetailData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonBlogDetailData = await blogdetailData.json()

    const jsonBlogDetailDataInCamelCase = {
      id: jsonBlogDetailData.id,
      title: jsonBlogDetailData.title,
      imageUrl: jsonBlogDetailData.image_url,
      avatarUrl: jsonBlogDetailData.avatar_url,
      author: jsonBlogDetailData.author,
      content: jsonBlogDetailData.content,
      topic: jsonBlogDetailData.topic,
    }

    this.setState({
      blogData: jsonBlogDetailDataInCamelCase,
    })
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
