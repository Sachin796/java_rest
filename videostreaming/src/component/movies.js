import React from "react";

function ListMovies(props) {
  return (
    <>
      <div className="x">
        <div class="card-body">
          <h5 class="card-title">Movie ID :- {props.id}</h5>
          <h4 class="card-text">Movie ID is {props.id}</h4>
          <h4 class="card-text">Movie name is {props.name}</h4>
          <h4 class="card-text">Movie Director is {props.director}</h4>
          <h4 class="card-text">Movie producer is {props.producer}</h4>
          <h4 class="card-text">Movie Description is {props.description}</h4>
          <h4 class="card-text">Movie FileName is {props.filename}</h4>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default ListMovies;
