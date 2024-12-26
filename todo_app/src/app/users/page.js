import React from "react";
import Usersdata from "../../../services/servicefile";
import Link from "next/link";

const Users = async () => {
  const userData = Usersdata();
  const users = await userData
//   console.log(users);
  return (
    <div>
      {users.map((ele) => {
        return (
          <h1 key={ele.id}>
            <Link href={`users/${ele.id}`}>{ele.username}</Link>
          </h1>
        );
      })}
    </div>
  );
};

export default Users;
