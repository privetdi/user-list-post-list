import React, { useState } from 'react'
import './changeUser.css'
import { IUser } from '../../api/interface'
import { Navigate, Route, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../../store/reducers/conunterSlice'
import { useNavigate } from 'react-router-dom'
import Switch from '../../assets/switch'
import Modal from '../../components/modalWindow'
import { githubPages } from '../../App'

function ViewUser() {
  const users = useSelector((state: RootState) => state.store.users)
  const dispatch = useDispatch()

  const { user } = useParams<{ user: string }>()
  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false)

  const selectedUser = user ? users?.find((item) => item.id === +user) : null
  const [name, setName] = useState(selectedUser?.name || '')
  const [email, setEmail] = useState(selectedUser?.email || '')
  const [company, setCompany] = useState(selectedUser?.company.name || '')
  const [phone, setPhone] = useState(selectedUser?.phone || '')
  const [password, setPassword] = useState(selectedUser?.password || '')

  const handleSave = () => {
    if (selectedUser) {
      const updatedUser: IUser = {
        ...selectedUser,
        name: name,
        email: email,
        phone: phone,
        company: {
          ...selectedUser.company,
          name: company,
        },
      }
      dispatch(updateUser(updatedUser))
    }
  }
  const deleteUserCb = (id: string) => {
    setModalOpen(false)
    dispatch(deleteUser(id))
    navigate(`${githubPages}/users`)
  }

  const handleClick = () => {
    setModalOpen(true)
  }

  return (
    <>
      <div className="nav">
        <span
          className="nav-item"
          onClick={() => navigate(`${githubPages}/users`)}
        >
          Сотрудник/
        </span>
        <span>сотрудник {selectedUser?.name}</span>
      </div>
      <div className="wrapper">
        <div>
          {selectedUser ? (
            <div className="changeUserForm">
              <span className="spanChangeUser">ФИО</span>
              <span className="">{name}</span>
              <span className="spanChangeUser">Номер телефона</span>
              <span className="">{phone}</span>
              <span className="spanChangeUser">Email</span>
              <span className="">{email}</span>
              <span className="spanChangeUser">Компания</span>
              <span className="">{company}</span>
            </div>
          ) : (
            <p>No user selected</p>
          )}
          <button
            className="Btn"
            onClick={() => navigate(`${githubPages}/users`)}
          >
            Назад
          </button>
        </div>
      </div>
    </>
  )
}

export default ViewUser
