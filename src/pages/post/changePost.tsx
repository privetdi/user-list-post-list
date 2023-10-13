import React, { useState } from 'react'
import './changePost.css'
import { IPost } from '../../api/interface'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../../store/reducers/conunterSlice'
import { useNavigate } from 'react-router-dom'
import Switch from '../../assets/switch'
import Modal from '../../components/modalWindow'
import { githubPages } from '../../App'

function ChangePost() {
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
      const updatedPost: IPost = {
        ...selectedPost,
        title: title,
        body: body,
      }
      dispatch(updatePost(updatedPost))
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
          посты /
        </span>
        <span>Изменение поста</span>
      </div>
      <h2 className="titleChangepost">Изменить сотрудника</h2>
      <div className="wrapper">
        <div>
          {selectedPost ? (
            <div className="changepostForm">
              <span className="spanChangepost">
                Title <span className="last-letter">*</span>
              </span>
              <input
                className="inputChangePost"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className="spanChangepost">
                Body <span className="last-letter">*</span>
              </span>
              <textarea
                rows={4}
                cols={50}
                className="inputChangePost bodyPost"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          ) : (
            <p>No post selected</p>
          )}
          <button
            className="Btn"
            onClick={() => navigate(`${githubPages}/posts`)}
          >
            Отмена
          </button>
          <button className="Btn active" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="settingBar">
          <h1 className="text_settingBar settingBar__title">Статус</h1>
          <div className="switch">
            <span className="text_settingBar">Архив</span>
            <button className="Btn_switch">
              <Switch />
            </button>
            <span className="text_settingBar active">Актив</span>
          </div>
          <button className="Btn setting" onClick={handleClick}>
            удалить пост
          </button>
        </div>
        <Modal
          messageText={'Вы хотите удалить пост?'}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onDelete={() => {
            if (post) deletePostCb(post)
          }}
        />
      </div>
    </>
  )
}

export default ChangePost
