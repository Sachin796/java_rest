import React from "react";
import ListMovies from "./movies";
import axios from "axios";

class FetchData extends React.Component {
  state = {};
  componentDidMount() {
    fetch("http://localhost:8080/movieuser_rest/resources/api/getallmovies", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
      });
  }

  getMovieByID() {
    fetch(`http://localhost:8080/movieuser_rest/resources/api/getallmovies`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
      });
  }

  render() {
    const values = Object.values(this.state);
    {
      console.log(values);
    }
    return (
      <>
        <form>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        <h4>List of the products is </h4>

        {values.map((movie, index) => (
          <div className>
            <ListMovies {...movie} />
          </div>
        ))}
      </>
    );
  }
}

export default FetchData;
