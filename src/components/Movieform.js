import React, { useState } from "react";

function Movieform({ handleSubmit }) {
  const [movie, setMovie] = useState({
    name: "",
    rating: 0,
    duration: "",
  });

  const [error, setError] = useState(false);

  const validationPattern = /^(\d+(\.\d+)?h|\d+m)$/i;

  function submit() {
    setError(false);
    const ObjValueIsEmpty = Object.values(movie).some((val) => val === "");
    if (ObjValueIsEmpty) {
      return;
    }
    if (!validationPattern.test(movie.duration)) {
      setError(true);
    } else {
      handleSubmit(movie);

      setMovie({
        name: "",
        rating: 0,
        duration: "",
      });
    }

    // if (movie.duration.includes("m") || movie.duration.includes("h")) {
    //   setError(false);
    //   handleSubmit(movie);
    //   setMovie({
    //     name: "",
    //     rating: 0,
    //     duration: "",
    //   });
    // } else {
    //   setError(true);
    // }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value) {
      setError(false);
    }
    setMovie({ ...movie, [name]: value });
  };

  function convertDurationToHrs(duration) {
    let valueInHrs = "";
    const validationPattern = /^(\d+m)$/i.test(duration);

    if (validationPattern) {
      const value = duration.replace(/m$/, "");
      valueInHrs = (Number(value) / 60).toFixed(2) + " Hrs";
    } else {
      valueInHrs = duration.replace(/h$/, "") + " Hrs";
    }
    // if (duration.includes("h")) {
    //   let value = duration.split("h");
    //   return value[0] + "Hrs";
    // } else if (duration.includes("m")) {
    //   let value = duration.split("m");
    //   let durationInHrs = (Number(value[0]) / 60).toFixed(2);
    //   return durationInHrs + " Hrs";
    // }
    return valueInHrs;
  }

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              name="name"
              value={movie.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              onChange={handleChange}
              name="rating"
              required
              value={movie.rating}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              name="duration"
              required
              onChange={handleChange}
              value={movie.duration}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              className="mx-0"
              data-testid="addButton"
              onClick={submit}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
