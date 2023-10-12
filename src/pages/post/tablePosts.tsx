import React, { useEffect } from "react";
import { IPost } from "../../api/interface";
import { api } from "../../api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { setListPosts } from "../../store/reducers/conunterSlice";
import PostItem from "./postItem";
import "./tablePosts.css";
import { Navigate, useNavigate } from "react-router";

function TablePosts() {
  const posts = useSelector((state: RootState) => state.store.posts);
  const navigate = useNavigate();
  function newPost() {
    navigate(`/posts/сreation`);
  }
  return (
    <div>
      <h1 className="title">Посты</h1>
      <div className="bar">
        <button className="Btn newUser active" onClick={newPost}>
          <span className="plus">+</span> создать
        </button>
      </div>
      <div className="posts__item header">
        <div className="table_header_title">
          <span>Title</span>
        </div>
        <div className="table_header_body">
          <span>Body</span>
        </div>
      </div>
      {posts !== null
        ? posts?.map((item) => {
            return <PostItem post={item} />;
          })
        : "Loading..."}
    </div>
  );
}

export default TablePosts;
