import React, { useState } from 'react'
import './changePost.css'
import { IPost } from '../../api/interface'
import { Navigate, Route, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../../store/reducers/conunterSlice'
import { useNavigate } from 'react-router-dom'
import { githubPages } from '../../App'

function ViewPost() {
  const posts = useSelector((state: RootState) => state.store.posts)
  const dispatch = useDispatch()

  const { post } = useParams<{ post: string }>()
  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false)

  const selectedPost = post ? posts?.find((item) => item.id === +post) : null
  const [title, setTitle] = useState(selectedPost?.title || '')
  const [body, setBody] = useState(selectedPost?.body || '')

  const handleSave = () => {
    if (selectedPost) {
      const updatedpost: IPost = {
        ...selectedPost,
        title: title,
        body: body,
      }
      dispatch(updatePost(updatedpost))
    }
  }
  const deletePostCb = (id: string) => {
    setModalOpen(false)
    dispatch(deletePost(id))
    navigate(`${githubPages}/posts`)
  }

  const handleClick = () => {
    setModalOpen(true)
  }

  return (
    <>
      <div className="nav">
        <span
          className="nav-item"
          onClick={() => navigate(`${githubPages}/posts`)}
        >
          Сотрудник/
        </span>
        <span>post</span>
      </div>
      <div className="wrapper">
        <div>
          {selectedPost ? (
            <div className="changePostForm">
              <span className="spanChangepost">Title</span>
              <span className="">{title}</span>
              <span className="spanChangepost">Body</span>
              <span className="">{body}</span>
            </div>
          ) : (
            <p>No post selected</p>
          )}
          <button
            className="Btn"
            onClick={() => navigate(`${githubPages}/posts`)}
          >
            Назад
          </button>
        </div>
      </div>
    </>
  )
}

export default ViewPost
