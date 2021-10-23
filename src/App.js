import "./App.css";
import Header from "./Components/Header";
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Ticket from "./Components/Ticket";
class App extends Component {
  constructor() {
    super();
    this.state = {
      compra: {},
      cartelera: [
        {
          codigo: 1,
          nombre: "Halloween Kills",
          idioma: "SUB",
          clasificacion: "C",
          horarios: ["13:00", "17:50", "20:30"],
          duracion: "106 min",
          url: "https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg",
          precio: 95,
        },
        {
          codigo: 2,
          nombre: "Los Locos Addams 2",
          idioma: "ESP",
          clasificacion: "A",
          horarios: ["9:00", "11:30", "13:30"],
          duracion: "93 min",
          url: "https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg",
          precio: 50,
        },
        {
          codigo: 3,
          nombre: "Sin Tiempo Para Morir",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["11:00", "13:50", "19:40"],
          duracion: "164 min",
          url: "https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg",
          precio: 80,
        },
        {
          codigo: 4,
          nombre: "Venom: Carnage Liberado",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["10:30", "14:20", "18:30"],
          duracion: "98 min",
          url: "https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg",
          precio: 80,
        },
      ],
    };



    // calcular = () => {
    //   //  FUNCION
    // };

    // eliminarCompra = () => {
    //   //  FUNCION
    // };

    // comprar = () => {
    //   //  FUNCION
    // };
  }
  agregar = (movie,horario) => {
    let objeto={}; objeto=movie;
    objeto.horario=horario;
    objeto.cantidad=0;
    objeto.total=0;
    console.log(objeto);
    objeto=movie;
    this.setState({
      ...this.state,
      compra: movie,
    });
  };
  render() {

    return (
      <div className="App">
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Movies movies={this.state.cartelera} agregar={this.agregar} />
          <Ticket ticket={this.state.compra}/>
        </div>
      </div>
    );
  }
}

export default App;
