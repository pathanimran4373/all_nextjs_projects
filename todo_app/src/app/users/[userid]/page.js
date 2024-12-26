import React from "react";
import Usersdata from "../../../../services/servicefile";

const UsersId = async (props) => {
  const userData = Usersdata();
  const users = await userData
  const currentId = props.params.UsersId
  console.log(users[currentId-1]);
  const userDetails = users[currentId-1]
  return (
    <div>
    <h1>users details page</h1>
    <p>{userDetails.username}</p>
    <p>{userDetails.password}</p>
    <p>{userDetails.image}</p>
    <p>{userDetails.birthdate}</p>
    </div>
  );
};

export default UsersId;

// generat static pages of users details

export async function generateStaticParams(){
    const userData = Usersdata();
  const users = await userData
  return users.map(user=>({
    UsersId:user.id.toString()
  }))
}