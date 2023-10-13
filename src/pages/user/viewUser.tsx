import React, { useState } from 'react'
import './changeUser.css'
import { Navigate, Route, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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

  return (
    <>
      <div className="nav">
        <span
          className="nav-item"
          onClick={() => navigate(`${githubPages}/users`)}
        >
          Сотрудники/
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
