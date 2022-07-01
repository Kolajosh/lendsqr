import React, { useEffect, useState } from "react";
import UserInformation from "../layout/UserInformation";
import UserProfile from "../layout/UserProfile";
import { IconLongLeft, IconSpinner } from "../utils/icons";
import { userList } from "../utils/UsersList";
import '../styles/UserDetails.scss'

function UserDetails() {
  const userId = document.location.pathname.split("/")[2];
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let newUser = userList.filter((item) => item.id === userId);
    setUserData(newUser[0]);
  }, [userId]);

  return (
    <>
      <div className="UserDetailsContainer">
        <div className="nav">
          <a href="/users">
            <IconLongLeft /> Back to Users
          </a>
        </div>
        <div className="header">
          <h1>User Details</h1>
          <div className="btns">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>
        {userData ? (
          <>
            <UserProfile userData={userData} />
            <UserInformation userData={userData} />
          </>
        ) : (
          <div className="Loader">
            <IconSpinner />
          </div>
        )}
      </div>
    </>
  );
}

export default UserDetails;
