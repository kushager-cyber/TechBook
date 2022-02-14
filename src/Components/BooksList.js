import React, { Component } from "react";
import Bookitem from "./Bookitem.js";
import { books } from "./Data";
export default class BooksList extends Component {
  constructor() {
    super();
    this.state = {
      books: books,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    let a = e.target.value;

    if (a !== "") {
      let res = books.filter((val) =>
        val.category.toLowerCase().includes(a.toLowerCase())
      );
      if (res.length === 0) {
        alert("No Item Found");
      }
      this.setState({
        books: res,
      });
    } else {
      this.setState({
        books: books,
      });
    }
  }

  render() {
    return (
      <>
        <input
          className="Search-Input me-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleSearch}
        />

        <div className="container my-3">
          <h4>
            “A reader lives a thousand lives before he dies . . . The man who
            never reads lives only one.” - George R.R. Martin
          </h4>

          <div className="row">
            {this.state.books.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Bookitem
                    name={element.title}
                    price={element.price}
                    imgUrl={element.image}
                    iurl={element.url}
                    description={element.Description}
                    available={element.available}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
