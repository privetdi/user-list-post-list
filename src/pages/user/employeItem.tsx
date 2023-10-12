import React from 'react'
import './employeItem.css'
import { IUser } from '../../api/interface'
import Pencil from '../../assets/pencil'
import Show from '../../assets/show'
import { Navigate, Route, useNavigate } from 'react-router'
import TableEmploye from './tableEmploye.'
import ChangeUser from './changeUses'
import { githubPages } from '../../App'

function EmployeItem({ user }: { user: IUser }) {
  const navigate = useNavigate()
  function changeUser(id: number) {
    navigate(`${githubPages}/users/change/${id}`)
  }
  return (
    <div className="employe__item" key={user.id}>
      <div className="name">
        <span>{user.name}</span>
      </div>
      <div className="company">
        <span>{user.company.name}</span>
      </div>
      <div className="phone">
        <span>{user.phone}</span>
      </div>
      <div className="email">
        <span className="email">{user.email}</span>
        <button className="svgBtn" onClick={() => changeUser(user.id)}>
          <Pencil />
        </button>
        <button
          className="svgBtn"
          onClick={() => navigate(`${githubPages}/users/view/${user.id}`)}
        >
          <Show />
        </button>
      </div>
    </div>
  )
}

export default EmployeItem
