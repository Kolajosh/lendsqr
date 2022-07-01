import React from "react";
import "../styles/UsersCard.scss";
import { usersCardsList } from "../utils/UsersCardLists";

function UsersCard() {
  return (
    <>
      <div className="Cards">
        {usersCardsList.map((item) => (
          <div key={item.title} className="card">
            <span style={{ color: item.color, background: `${item.color}15` }}>
              {item.icon}
            </span>
            <p>{item.title}</p>
            <h2>{item.count}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsersCard;
