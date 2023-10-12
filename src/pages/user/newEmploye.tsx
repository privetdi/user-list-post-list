import React, { useState } from 'react'
import './changeUser.css'
import { IUser } from '../../api/interface'
import { Navigate, Route, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import {
  addUser,
  deleteUser,
  updateUser,
} from '../../store/reducers/conunterSlice'
import { useNavigate } from 'react-router-dom'
import Switch from '../../assets/switch'
import { githubPages } from '../../App'

function NewEmploye() {
  const users = useSelector((state: RootState) => state.store.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate = () => {
    let id: number = 0
    if (users) {
      id = Math.max(...users?.map((item) => item.id))
    }
    const updatedUser: IUser = {
      id: ++id,
      name: name,
      email: email,
      phone: phone,
      company: {
        name: company,
      },
    }
    dispatch(addUser(updatedUser))
    navigate(`${githubPages}/users`)
  }

  return (
    <>
      <h2 className="titleChangeUser">Создание сотрудника</h2>
      <div className="wrapper">
        <div>
          {
            <div className="changeUserForm">
              <span className="spanChangeUser">
                ФИО <span className="last-letter">*</span>
              </span>
              <input
                className="inputChangeUser"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="spanChangeUser">
                Номер телефона <span className="last-letter">*</span>
              </span>
              <input
                className="inputChangeUser"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="spanChangeUser">
                Email <span className="last-letter">*</span>
              </span>

              <input
                className="inputChangeUser"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="spanChangeUser">
                Компания <span className="last-letter">*</span>
              </span>
              <input
                className="inputChangeUser"
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <span className="spanChangeUser">
                Password <span className="last-letter">*</span>
              </span>
              <input
                className="inputChangeUser"
                type="text"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          }
          <button
            className="Btn"
            onClick={() => navigate(`${githubPages}/users`)}
          >
            Отмена
          </button>
          <button className="Btn active" onClick={handleCreate}>
            Создать
          </button>
        </div>
      </div>
    </>
  )
}

export default NewEmploye
