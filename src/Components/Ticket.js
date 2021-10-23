import React, { Component } from "react";
import { Button } from "@mui/material";

import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";

class Movies extends Component {
  constructor() {
    super();
    this.state = { orders: [], open: false,value:'' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){  
    this.props.aumentar(event.target.value);
  }

  handleOpen = (color,mensaje) => {
    this.colorAlerta = color;
    this.mensaje = mensaje;
    this.setState({ open: true });
  };

  handleClose = () => this.setState({ open: false });

  handleClick = () => this.setState({ orders: [1], open: true });

  mostrar = () => {
  console.log(this.state.value)
  };

  render() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    const { open } = this.state;
    let ticket = this.props.ticket;
    let keys = Object.keys(ticket);
    if (keys.length > 0) {
      // displayString = "none";
      return (
        <div id="divTicket">
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              marginBottom: "10px",
              backgroundColor: "gray",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>
              {ticket.nombre} ({ticket.idioma})
            </p>
            <p>Hora: {ticket.horario} </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>cantidad: </p>
              <input
                type="number"
                id="ticketAmount"
                min="0"
                max="100"
                value={ticket.cantidad}
                onChange={this.handleChange}
              />
            </div>
            <p>Total:{formatter.format(ticket.total)} </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                sx={{
                  marginLeft: "5px",
                  marginBottom: "5px",
                  marginRight: "5px",
                }}
                variant="contained"
                size="small"
                color="error"
                onClick={() => {
                  this.props.cancelar();
                }}
              >
                Cancelar
              </Button>
              <Button
                sx={{
                  marginLeft: "5px",
                  marginBottom: "5px",
                  marginRight: "5px",
                }}
                variant="contained"
                size="small"
                color="success"
                onClick={() => {
                    this.props.eliminar(ticket.cantidad);
                }}
              >
                Comprar
              </Button>
            </div>
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
    } else {
      // displayString = "block";
      return (
        <div id="divMensaje">
          <p>Selecciona una pelicula dando click en su horario</p>
        </div>
      );
    }
  }
}
export default Movies;
