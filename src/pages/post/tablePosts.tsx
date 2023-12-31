import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import PostItem from './postItem'
import './tablePosts.css'
import { Navigate, useNavigate } from 'react-router'
import { githubPages } from '../../App'

function TablePosts() {
  const posts = useSelector((state: RootState) => state.store.posts)
  const navigate = useNavigate()
  const newPost = () => {
    navigate(`${githubPages}/posts/сreation`)
  }

  return (
    <div>
      <h1 className="title">Посты</h1>
      <div className="bar">
        <button className="Btn newUser active" onClick={newPost}>
          <span className="plus">+</span> создать
        </button>
      </div>
      <div className="posts__item header">
        <div className="table_header_title">
          <span>Title</span>
        </div>
        <div className="table_header_body">
          <span>Body</span>
        </div>
      </div>
      {posts !== null
        ? posts?.map((item) => {
            return <PostItem post={item} />
          })
        : 'Loading...'}
    </div>
  )
}

export default TablePosts
