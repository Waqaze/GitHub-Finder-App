import React from "react";
import "./UserItem.css";

const UserItem = (props) => {
  // state = {
  //   id: "1",
  //     login: "mojombo",
  //     html_url: "https://github.com/mojombo",
  //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  // }

  //   constructor() {
  //   super();
  //   this.state = {
  //     id: "1",
  //     login: "mojombo",
  //     html_url: "https://github.com/mojombo",
  //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //   };
  // }

  const { login, html_url, avatar_url } = props.users;
  return (
    <div className="user">
      <img src={avatar_url} alt="Profile" />
      <h2>{login}</h2>
      <a href={html_url}>Profile</a>
    </div>
  );
};

export default UserItem;
