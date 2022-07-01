import React, { useState } from "react";
import { IconFilterList } from "../utils/icons";
import "../styles/TableHeader.scss";

function TableHeader() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <thead className="TableHeaderContainer">
        <tr>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              organization <IconFilterList />
            </button>
            {openFilter && (
              <form className="FilterPop">
                <div className="field">
                  <label htmlFor="org">Organization</label>
                  <select id="org">
                    <option value="">Select</option>
                    <option value="Lendsqr">Lendsqr</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="user">Username</label>
                  <input type="text" id="user" placeholder="User" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="Email" />
                </div>
                <div className="field">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" placeholder="Date" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Phone Number" />
                </div>
                <div className="field">
                  <label htmlFor="status">Status</label>
                  <select id="status">
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                  </select>
                </div>
                <div className="btns">
                  <button type="reset">Reset</button>
                  <button type="submit">Filter</button>
                </div>
              </form>
            )}
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Username <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Email <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Phone number <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Date joined <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Status <IconFilterList />
            </button>
          </th>
          <th></th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
