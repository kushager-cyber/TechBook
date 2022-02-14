import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Bookdetail(props) {
  return (
    <div>
      <div>
        <div className="card">
          <img
            src="https://itbook.store/img/books/9781484274613.png"
            className="card-img-top"
            alt="..."
          />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {localStorage.getItem("Bookname")}
            </li>
            <li className="list-group-item">
              {localStorage.getItem("Bookdesc")}
            </li>
            <li className="list-group-item">
              {localStorage.getItem("Bookavailable")}
            </li>
          </ul>
          <div className="card-body">
            <Link to="/Login" className="card-link btn">
              Buy
            </Link>
            <Link to="/Login" className="card-link btn">
              Rent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
