import React, { useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import NavBar from './components/navBar'
import './App.css'
import NewEmploye from './pages/user/newEmploye'
import NewDepartment from './pages/post/newDepartment'
import TableEmploye from './pages/user/tableEmploye.'
import TablePosts from './pages/post/tablePosts'
import ChangeUser from './pages/user/changeUses'
import ViewUser from './pages/user/viewUser'
import ChangePost from './pages/post/changePost'
import ViewPost from './pages/post/viewPost'
import NewPost from './pages/post/newPost'

export const githubPages = '/user-list-post-list'

function App() {
  return (
    <div className="App" id="modal-root">
      <NavBar />
      <div className="App__wrapper">
        <Routes>
          <Route path="/" element={<Navigate to={`${githubPages}/posts`} />} />
          <Route path="/users" element={<Navigate to={`${githubPages}/users`} />}/>
          <Route path="/posts" element={<Navigate to={`${githubPages}/posts`} />}/>
          <Route path={`${githubPages}`} element={<Navigate to={`${githubPages}/posts`} />}/>
          <Route path={`${githubPages}/users`} element={<TableEmploye />} />
          <Route path={`${githubPages}/posts`} element={<TablePosts />} />
          <Route path={`${githubPages}/posts/change/:post`} element={<ChangePost />}/>
          <Route path={`${githubPages}/users/change/:user`} element={<ChangeUser />}/>
          <Route path={`${githubPages}/users/сreation`} element={<NewEmploye />}/>
          <Route path={`${githubPages}/posts/сreation`} element={<NewPost />} />
          <Route path={`${githubPages}/users/view/:user`} element={<ViewUser />}/>
          <Route path={`${githubPages}/post/view/:post`} element={<ViewPost />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
