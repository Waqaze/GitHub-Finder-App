import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";

const User = ({users, loading}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} users={user} />;
        })}
      </div>
    );
  }

  //   state = {
  //     users: [
  //       {
  //         id: "1",
  //         login: "mojombo",
  //         html_url: "https://github.com/mojombo",
  //         avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //       },
  //       {
  //         id: "2",
  //         login: "defunkt",
  //         html_url: "https://github.com/defunkt",
  //         avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  //       },
  //       {
  //         id: "3",
  //         login: "pjhyett",
  //         html_url: "https://github.com/pjhyett",
  //         avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
  //       },
  //     ],
  //   };
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
};

User.propType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
