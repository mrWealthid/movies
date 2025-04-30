import React from "react";

function Movieslist({ movies }) {
  //   function convertDurationToHrs(duration) {
  //     let valueInHrs = "";
  //     const validationPattern = /^(\d+m)$/i.test(duration);

  //     if (validationPattern) {
  //       const value = duration.replace(/m$/, "");
  //       valueInHrs = (Number(value) / 60).toFixed(2) + " Hrs";
  //     } else {
  //       valueInHrs = duration.replace(/h$/, "") + "Hrs";
  //     }
  //     // if (duration.includes("h")) {
  //     //   let value = duration.split("h");
  //     //   return value[0] + "Hrs";
  //     // } else if (duration.includes("m")) {
  //     //   let value = duration.split("m");
  //     //   let durationInHrs = (Number(value[0]) / 60).toFixed(2);
  //     //   return durationInHrs + " Hrs";
  //     // }
  //     return valueInHrs;
  //   }

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {movies.map((movie, index) => (
          <li
            key={index}
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div className="layout-column w-40">
              {/* use this header for movie name */}
              <h3 className="my-3">{movie.name}</h3>
              {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
              <p className="my-0">Ratings: {movie.rating}/100</p>
            </div>
            <div className="layout-row my-auto mr-20">
              {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
              <p className="justify-content-end">{movie.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Movieslist;
