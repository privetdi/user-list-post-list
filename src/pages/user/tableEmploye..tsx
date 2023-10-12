import React, { useEffect } from 'react'
import { IUser } from '../../api/interface'
import { api } from '../../api/api'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { setListUsers } from '../../store/reducers/conunterSlice'
import EmployeItem from './employeItem'
import './tableEmploye.css'
import Search from '../../assets/search'
import { useNavigate } from 'react-router'
import { githubPages } from '../../App'

function TableEmploye() {
  const users = useSelector((state: RootState) => state.store.users)
  const navigate = useNavigate()
  function newUser() {
    navigate(`${githubPages}/users/сreation`)
  }

  return (
    <>
      <h1 className="title">Сотрудники</h1>
      <div className="bar">
        <button className="Btn newUser active" onClick={newUser}>
          <span className="plus">+</span> создать
        </button>
        <input
          type="text"
          className="searchInput"
          placeholder="Поиск по Имени, номеру или Email"
        />
        <div className="wrapper search">
          <Search />
        </div>
      </div>
      <div className="employe__item header">
        <div className="name">
          <span>ФИО</span>
        </div>
        <div className="company">
          <span>Компания</span>
        </div>
        <div className="phone">
          <span>Номер телефона</span>
        </div>
        <div className="email">
          <span>Email</span>
        </div>
      </div>
      <div className="employeList">
        {users !== null
          ? users?.map((item) => {
              return <EmployeItem user={item} />
            })
          : 'Loading...'}
      </div>
    </>
  )
}

export default TableEmploye
