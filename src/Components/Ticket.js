import React, { Component } from "react";
import { Button } from "@mui/material";

class Movies extends Component {
  render() {
    let ticket = this.props.ticket;
    console.log(Object.keys(ticket).length);

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
          <p>{ticket.nombre}</p>
          <p>Hora: {ticket.horario} </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems:"center"
            }}
          >
            <p>cantidad: </p>
            <input
              type="number"
              id="ticket"
              min="0"
              max="100"
            />
          </div>
          <p>Total:{ticket.total} </p>
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
              onClick={() => {}}
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
              color="error"
              onClick={() => {}}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;
