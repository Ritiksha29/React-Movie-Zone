import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "40px",
          color: "orange",
          fontFamily: "cursive",
        }}
      >
        My Movie Zone{" "}
      </h3>
      <div style={{ margin: "auto", marginTop: "30px", textAlign: "center" }}>
        <button
          onClick={() => setMovieList(movies)}
          type="button"
          className="btn btn-outline-primary"
          style={{ marginRight: "30px" }}
        >
          All
        </button>
        <button
          onClick={() => filterByCategory("Action")}
          type="button"
          className="btn btn-outline-secondary"
          style={{ marginRight: "30px" }}
        >
          Action
        </button>
        <button
          onClick={() => filterByCategory("Thriller")}
          type="button"
          className="btn btn-outline-success"
          style={{ marginRight: "30px" }}
        >
          Thriller
        </button>
        <button
          onClick={() => filterByCategory("Animation")}
          type="button"
          className="btn btn-outline-danger"
          style={{ marginRight: "30px" }}
        >
          Animation
        </button>
        <button
          onClick={() => filterByCategory("Horror")}
          type="button"
          className="btn btn-outline-warning"
          style={{ marginRight: "30px" }}
        >
          Horror
        </button>
        <button
          onClick={() => filterByCategory("Drama")}
          type="button"
          className="btn btn-outline-info"
          style={{ marginRight: "30px" }}
        >
          Drama
        </button>
        <button
          onClick={() => filterByCategory("Sci-Fi")}
          type="button"
          className="btn btn-outline-light"
          style={{ marginRight: "30px" }}
        >
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          textAlign: "center",
          width: "1350px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "350px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5 style={{ fontSize: "18px" }}>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
