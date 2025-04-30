import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddMovies(newMovie) {
    const newMovies = [
      ...movies,
      { ...newMovie, duration: convertDurationToHrs(newMovie.duration) },
    ];

    const sortedMovies = newMovies
      .map((movie) => ({
        ...movie,
        duration: movie.duration.replace(/Hrs$/, ""),
      }))
      .sort((a, b) => Number(b.duration) - Number(a.duration))
      .map((movie) => ({
        ...movie,
        duration: movie.duration + "Hrs",
      }));

    setMovies(sortedMovies);
  }

  function convertDurationToHrs(duration) {
    let valueInHrs = "";
    const validationPattern = /^(\d+m)$/i.test(duration);

    if (validationPattern) {
      const value = duration.replace(/m$/, "");
      valueInHrs = (Number(value) / 60).toFixed(1) + " Hrs";
    } else {
      valueInHrs = duration.replace(/h$/, "") + " Hrs";
    }
    return valueInHrs;
  }

  function handleSearch({ target }) {
    console.log(target.value);
    setSearch(target.value);

    if (target.value.length >= 2) {
      setMovies(
        movies.filter((movie) =>
          movie.name.toLowerCase().includes(target.value.toLowerCase())
        )
      );
    } else {
      setMovies(movies);
    }
  }

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform handleSubmit={handleAddMovies} />
        </div>
        <div className="layout-column w-30">
          <Search handleSearch={handleSearch} />
          {movies.length ? <Movieslist movies={movies} /> : ""}
          {search.length >= 2 && !movies.length && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
