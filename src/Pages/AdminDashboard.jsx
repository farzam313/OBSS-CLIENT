import React from "react";
import "./adminDashboard.css";

const user = async () => {
  await axios.get("http://localhost:5000/users");

  const message = document.getElementById("no.");
  message.textContent = `total no of user on the website:${user}`;
};

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <div className="userLists">
        <p>this is User list</p>
        <label className=" no."></label>
      </div>
      <div className="bookLists">
        <p>this is Book lists</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
