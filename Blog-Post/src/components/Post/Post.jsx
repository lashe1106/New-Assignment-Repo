import "./Post.css"
const Post = (props) => {
    return (
        <div className={`post ${props.theme}`}>
            <div className='post-image'>
                <img src={props.blogImage} alt={props.title} />
            </div>
            <div className='post-content'>
                <h3>Title: <span>{props.title}</span></h3>
                <h3>Author: <span>{props.author}</span></h3>
                <h3>Content: <span>{props.content}</span></h3>
                <h3>Date: <span>{props.date}</span></h3>
            </div>
        </div>
    )
}

export default Post