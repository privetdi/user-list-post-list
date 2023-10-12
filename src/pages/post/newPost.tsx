import React, { useState } from "react";
import "./changePost.css";
import { IPost } from "../../api/interface";
import { Navigate, Route, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/reducers/conunterSlice";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const posts = useSelector((state: RootState) => state.store.posts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreate = () => {
    let id: number = 0;
    if (posts) {
      id = Math.max(...posts?.map((item) => item.id));
    }
    const updatedPost: IPost = {
      id: ++id,
      title: title,
      body: body,
    };
    dispatch(addPost(updatedPost));
    navigate("/posts");
  };

  return (
    <>
      <h2 className="titleChangeUser">Создание поста</h2>
      <div className="wrapper">
        <div>
          {
            <div className="changeUserForm">
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
          }
          <button className="Btn" onClick={() => navigate("/posts")}>
            Отмена
          </button>
          <button className="Btn active" onClick={handleCreate}>
            Создать
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPost;
