import React from "react";
import { useParams } from "react-router-dom";

function MovieShow() {
  const movies = {
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  };

  const params = useParams();
  const selectedMovie = movies[params.movieId];

  return (
    <div>
      <h3>{selectedMovie.title}</h3>
    </div>
  );
}

export default MovieShow;