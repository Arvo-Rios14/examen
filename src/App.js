import "./App.css";
import Header from "./Components/Header";
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Ticket from "./Components/Ticket";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [], open: false,
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
  }

  handleOpen = (color,mensaje) => {
    this.colorAlerta = color;
    this.mensaje = mensaje;
    this.setState({ open: true });
  };

  handleClose = () => this.setState({ open: false });

  handleClick = () => this.setState({ orders: [1], open: true });
  cancelar = () => {
    document.getElementById('ticketAmount').value="0";
    this.setState({
      ...this.state,
      compra: {},
    });
  };
  eliminarCompra = (cantidad) => {
    if(cantidad>0){

      this.setState({
        ...this.state,
        compra: {}
      });
      this.handleOpen("success","Disfruta la pelicula!");
    } else{
      this.handleOpen("error","Agrega una cantidad de boletos valida!");
    }
  };

  aumentar = (valor) => {
    console.log(valor);
    let objeto=this.state.compra;
    objeto.cantidad=valor;
    objeto.total=objeto.precio*objeto.cantidad;
    this.setState({
      ...this.state,
      compra: objeto
    });
  };
  
  agregar = (movie,horario) => {
    let objeto={}; objeto=movie;
    objeto.horario=horario;
    objeto.cantidad=0;
    objeto.total=0;
    this.setState({
      ...this.state,
      compra: objeto,
    });
  };


  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Header></Header>
        <div style={{ display: "flex",flexDirection:"row",justifyContent:"space-evenly" }}>
          <Movies movies={this.state.cartelera} agregar={this.agregar} />
          <Ticket ticket={this.state.compra} cancelar={this.cancelar} aumentar={this.aumentar} eliminar={this.eliminarCompra}/>
        </div>
        <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={open}
            onClose={this.handleClose}
            autoHideDuration={2000}
          >
            <Alert
              onClose={this.handleClose}
              severity={this.colorAlerta}
              elevation={4}
              variant="filled"
            >
              {this.mensaje}
            </Alert>
          </Snackbar>
      </div>
    );
  }
}

export default App;
