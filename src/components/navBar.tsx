import React, { useEffect } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { IPost, IUser } from "../api/interface";
import { api } from "../api/api";
import { setListPosts, setListUsers } from "../store/reducers/conunterSlice";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const response: IUser[] = await api<IUser[], Body>(
          "https://jsonplaceholder.typicode.com/users",
          { method: "GET" }
        );
        dispatch(setListUsers({ users: response }));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchDataPosts = async () => {
      try {
        const response: IPost[] = await api<IPost[], Body>(
          "https://jsonplaceholder.typicode.com/posts",
          { method: "GET" }
        );
        dispatch(setListPosts({ posts: response }));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataUsers();
    fetchDataPosts();
  }, []);
  return (
    <div className="navBar">
      <div className="navBar__logo">Logo</div>
      <Link to="/users" className="navBar__link">
        Сотрудники
      </Link>
      <Link to="/posts" className="navBar__link">
        Посты
      </Link>
    </div>
  );
}

export default NavBar;
