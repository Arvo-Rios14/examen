import React, { Component } from "react";
import { Button } from "@mui/material";

class Movies extends Component {
  render() {
    var movies = this.props.movies;
    console.log(movies);

    return (
      <div id="divMovies">
        {movies.map((movie) => (
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              marginBottom: "10px",
              backgroundColor: "gray",
            }}
          >
            <img key="movie.codigo" src={movie.url} />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              <p>{movie.nombre}</p>
              <p>{movie.idioma}</p>
              <p>{movie.clasificacion}</p>
              <p>{movie.duracion}</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {movie.horarios.map((horario) => (
                  <Button
                    sx={{ marginLeft: "5px", marginBottom: "5px",marginRight:"5px" }}
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => {this.props.agregar(movie,horario)}}
                  >
                    {horario}
                  </Button>
                ))}

                {/* <Button
                  sx={{ marginLeft: "5px",marginBottom:"5px" }}
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => {}}
                >
                  Boton
                </Button>
                <Button
                  sx={{ marginLeft: "5px",marginBottom:"5px",marginRight:"5px" }}
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => {}}
                >
                  Boton
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Movies;
