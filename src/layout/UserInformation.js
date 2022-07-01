import React from "react";
import '../styles/UserInformation.scss'

function UserInformation({ userData }) {
  return (
    <>
      <div className="UserInfoContainer">
        <div className="field">
          <h2>Personal Information</h2>
          <div className="row">
            <div className="col">
              <h3>full Name</h3>
              <p>{userData.fullName}</p>
            </div>
            <div className="col">
              <h3>Phone Number</h3>
              <p>{userData.phone}</p>
            </div>
            <div className="col">
              <h3>Email Address</h3>
              <p>{userData.email}</p>
            </div>
            <div className="col">
              <h3>Bvn</h3>
              <p>{userData.bvn}</p>
            </div>
            <div className="col">
              <h3>Gender</h3>
              <p>{userData.gender}</p>
            </div>
            <div className="col">
              <h3>Marital status</h3>
              <p>{userData.married}</p>
            </div>
            <div className="col">
              <h3>Children</h3>
              <p>{userData.children}</p>
            </div>
            <div className="col">
              <h3>Type of residence</h3>
              <p>{userData.apartment}</p>
            </div>
          </div>
        </div>
        <div className="field">
          <h2>Education and Employment</h2>
          <div className="row">
            <div className="col">
              <h3>level of education</h3>
              <p>{userData.education}</p>
            </div>
            <div className="col">
              <h3>employment status</h3>
              <p>{userData.employed}</p>
            </div>
            <div className="col">
              <h3>sector of employment</h3>
              <p>{userData.sector}</p>
            </div>
            <div className="col">
              <h3>Duration of employment</h3>
              <p>{userData.duration}</p>
            </div>
            <div className="col">
              <h3>office email</h3>
              <p>{userData.officeEmail}</p>
            </div>
            <div className="col">
              <h3>Monthly income</h3>
              <p>{userData.income}</p>
            </div>
            <div className="col">
              <h3>loan repayment</h3>
              <p>{userData.loan}</p>
            </div>
          </div>
        </div>

        <div className="field">
          <h2>Socials</h2>
          <div className="row">
            <div className="col">
              <h3>Twitter</h3>
              <p>{userData.twitter}</p>
            </div>
            <div className="col">
              <h3>Facebook</h3>
              <p>{userData.facebook}</p>
            </div>
            <div className="col">
              <h3>Instagram</h3>
              <p>{userData.instagram}</p>
            </div>
          </div>
        </div>

        <div className="field">
          <h2>Guarantor</h2>
          {userData.guarantors.map((guarantor) => (
            <div className="row" key={guarantor.email}>
              <div className="col">
                <h3>full Name</h3>
                <p>{guarantor.fullname}</p>
              </div>
              <div className="col">
                <h3>Phone Number</h3>
                <p>{guarantor.phone}</p>
              </div>
              <div className="col">
                <h3>Email Address</h3>
                <p>{guarantor.email}</p>
              </div>
              <div className="col">
                <h3>Relationship</h3>
                <p>{guarantor.relationship}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserInformation;
