import React from 'react'
import { IPost, IUser } from '../../api/interface'
import Pencil from '../../assets/pencil'
import Show from '../../assets/show'
import { Navigate, Route, useNavigate } from 'react-router'
import './postItem.css'
import { githubPages } from '../../App'

function PostItem({ post }: { post: IPost }) {
  const navigate = useNavigate()
  function changePost(id: number) {
    navigate(`${githubPages}/posts/change/${id}`)
  }
  return (
    <div className="post__item" key={post.id}>
      <span className="post__title">{post.title}</span>
      <div className="post__body">
        <span className="post__body_wrapper"> {post.body}</span>
        <button className="svgBtn" onClick={() => changePost(post.id)}>
          <Pencil />
        </button>
        <button
          className="svgBtn"
          onClick={() => navigate(`${githubPages}/post/view/${post.id}`)}
        >
          <Show />
        </button>
      </div>
    </div>
  )
}

export default PostItem
