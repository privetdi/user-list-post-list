import React, { useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import "./App.css";
import NewEmploye from "./pages/user/newEmploye";
import NewDepartment from "./pages/post/newDepartment";
import TableEmploye from "./pages/user/tableEmploye.";
import TablePosts from "./pages/post/tablePosts";
import ChangeUser from "./pages/user/changeUses";
import ViewUser from "./pages/user/viewUser";
import ChangePost from "./pages/post/changePost";
import ViewPost from "./pages/post/viewPost";
import NewPost from "./pages/post/newPost";

function App() {
  return (
    <div className="App" id="modal-root">
      <NavBar />
      <div className="App__wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/users" element={<TableEmploye />} />
          <Route path="/posts" element={<TablePosts />} />
          <Route path="/posts/change/:post" element={<ChangePost />} />
          <Route path="/users/change/:user" element={<ChangeUser />} />;
          <Route path="/users/сreation" element={<NewEmploye />} />;
          <Route path="/posts/сreation" element={<NewPost />} />;
          <Route path="/users/view/:user" element={<ViewUser />} />;
          <Route path="/post/view/:post" element={<ViewPost />} />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
