import React, { Component } from "react";
import Bookdetail from "./Bookdetail";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export class Bookitem extends Component {
  constructor() {
    super();
    this.state = {
      action: "",
    };
  }

  render() {
    let { name, price, imgUrl, iurl, description, available } = this.props;

    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price-{price}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <b>This book is currently {available}</b>
            </p>
            <Link
              href={iurl}
              rel="noreferrer"
              className="btn btn-sm btn-primary"
              disabled={this.props.available == "currently not available"}
              to="/Login"
            >
              Buy
            </Link>
            <Link
              href={iurl}
              target="_blank"
              rel="noreferrer"
              disabled={this.props.available == "currently not available"}
              className="btn btn-sm btn-primary"
              to="/Login"
            >
              Rent
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookitem;
