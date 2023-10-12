import React, { useState } from "react";
import "./changeUser.css";
import { IUser } from "../../api/interface";
import { Navigate, Route, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../store/reducers/conunterSlice";
import { useNavigate } from "react-router-dom";
import Switch from "../../assets/switch";
import Modal from "../../components/modalWindow";

function ChangeUser() {
  const users = useSelector((state: RootState) => state.store.users);
  const dispatch = useDispatch();

  const { user } = useParams<{ user: string }>();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const selectedUser = user ? users?.find((item) => item.id === +user) : null;
  const [name, setName] = useState(selectedUser?.name || "");
  const [email, setEmail] = useState(selectedUser?.email || "");
  const [company, setCompany] = useState(selectedUser?.company.name || "");
  const [phone, setPhone] = useState(selectedUser?.phone || "");
  const [password, setPassword] = useState(selectedUser?.password || "");

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
      };
      dispatch(updateUser(updatedUser));
    }
  };
  const deleteUserCb = (id: string) => {
    setModalOpen(false);
    dispatch(deleteUser(id));
    navigate("/users");
  };

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="nav">
        <span className="nav-item" onClick={() => navigate("/users")}>
          Сотрудники /
        </span>
        <span>Создать сотрудника</span>
      </div>
      <h2 className="titleChangeUser">Изменить сотрудника</h2>
      <div className="wrapper">
        <div>
          {selectedUser ? (
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
                placeholder="Password"
                value={""}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          ) : (
            <p>No user selected</p>
          )}
          <button className="Btn" onClick={() => navigate("/users")}>
            Отмена
          </button>
          <button className="Btn active" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="settingBar">
          <h1 className="text_settingBar settingBar__title">Статус</h1>
          <div className="switch">
            <span className="text_settingBar">Архив</span>
            <button className="Btn_switch">
              <Switch />
            </button>
            <span className="text_settingBar active">Актив</span>
          </div>
          <button className="Btn setting" onClick={handleClick}>
            удалить сотрудника
          </button>
        </div>
        <Modal
          messageText={"Вы хотите удалить сотрудника?"}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onDelete={() => {
            if (user) deleteUserCb(user);
          }}
        />
      </div>
    </>
  );
}

export default ChangeUser;
