import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import "./register.css";

export function Error() {
  return (
    <div className="error-container">
      <form className="errorForm">
        <header className="HeaderError">
          <h1 className="headerTitleError">
            Su link para activar la cuenta ha expirado,debe volver a registrarte
          </h1>
        </header>
        <Link to="/registro">
          <button className="button">
            <span>Registrarse</span>
          </button>
        </Link>
        <Grid
          className="gridError"
          container
          spacing={2}
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Grid>
      </form>
    </div>
  );
}
