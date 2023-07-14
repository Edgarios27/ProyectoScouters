import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Radio,
  FormControlLabel,
  TableContainer
  
  
} from "@mui/material";

import { FaStar } from "react-icons/fa";
import "./register.css";

export const Prueba = () => {
  const [cardStates, setCardStates] = useState({
    1: { isFavorite: false },
    2: { isFavorite: false },
    3: { isFavorite: false },
  });

  const handleFavoriteClick = (id) => {
    setCardStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isFavorite: !prevState[id].isFavorite,
      },
    }));
  };

  
 
  return (
    <Box sx={{ margin: "2rem auto",width:"40%", border: "1px solid #c7f55c", borderRadius: "5px", maxHeight: "400px", overflowY: "auto" }}>
        <TableContainer  >

          <Box sx={{ paddingBottom: "5rem" }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Selecciona el jugador
              </Typography>{" "}
              <Typography variant="h5" component="h1" gutterBottom>
                Puedes elegir a tus jugadores seguidos o buscar nuevos
              </Typography>
          </Box>

          <Box sx={{borderBottom: "1px solid #c7f55c",display: "flex", justifyContent: "space-around",}}> 
                  <Typography variant="h6">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <div className="checkbox-circle">
                          <svg viewBox="0 0 52 52" className="checkmark">
                            <circle
                              fill="none"
                              r="25"
                              cy="26"
                              cx="26"
                              className="checkmark-circle"
                            ></circle>
                            <path
                              d="M16 26l9.2 8.4 17.4-21.4"
                              className="checkmark-kick"
                            ></path>
                          </svg>
                        </div>
                      </label>
                  </Typography>
              
              
                    <Box>
                        <Typography
                          variant="h6"
                          component="img"
                          src="https://media.ultimahora.com/adjuntos/169/imagenes/007/794/0007794606.jpg"
                          className="imagen"
                        />
                      </Box>


                    <Box sx={{display: "flex",flexDirection: "column", justifyContent: "center",  alignItems: "center", marginRight: "13rem"}} >
                      <Typography variant="h6">Antonio Sanchez Garcia</Typography>
                      <Typography variant="h6">Villaverde</Typography>
                    </Box>


                  <Typography variant="body1"></Typography>


                  <Typography variant="h2">
                      <FaStar
                        className={cardStates[1]?.isFavorite ? "star active" : "star"}
                        onClick={() => handleFavoriteClick(1)}
                        style={{ fontSize: "2rem", color: cardStates[1]?.isFavorite ? "rgba(255, 217, 0, 0.993)" : "#b7b7b7" }}
                      />
                </Typography>
 
        </Box>


      <Box
        sx={{
          borderBottom: "1px solid #c7f55c",
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem 0",
       
        }}
      >
        <Typography variant="h6">
          <label className="checkbox">
            <input type="checkbox" />
            <div className="checkbox-circle">
              <svg viewBox="0 0 52 52" className="checkmark">
                <circle
                  fill="none"
                  r="25"
                  cy="26"
                  cx="26"
                  className="checkmark-circle"
                ></circle>
                <path
                  d="M16 26l9.2 8.4 17.4-21.4"
                  className="checkmark-kick"
                ></path>
              </svg>
            </div>
          </label>
        </Typography>
        <Box>
          <Typography
            variant="h6"
            component="img"
            src="https://media.ultimahora.com/adjuntos/169/imagenes/007/794/0007794606.jpg"
            className="imagen"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "13rem"
          }}
        >
          <Typography variant="h6">Antonio Sanchez Garcia</Typography>
          <Typography variant="h6">Villaverde</Typography>
        </Box>
        <Typography variant="body1"></Typography>
        <Typography variant="h2">
  <FaStar
    className={cardStates[2]?.isFavorite ? "star active" : "star"}
    onClick={() => handleFavoriteClick(2)}
    style={{ fontSize: "2rem", color: cardStates[2]?.isFavorite ? "rgba(255, 217, 0, 0.993)" : "#b7b7b7" }}
  />
</Typography>
      </Box>
      <Box
        sx={{
          // borderBottom: "1px solid #c7f55c",
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem 0"
        }}
      >
        <Typography variant="h6">
          <label className="checkbox">
            <input type="checkbox" />
            <div className="checkbox-circle">
              <svg viewBox="0 0 52 52" className="checkmark">
                <circle
                  fill="none"
                  r="25"
                  cy="26"
                  cx="26"
                  className="checkmark-circle"
                ></circle>
                <path
                  d="M16 26l9.2 8.4 17.4-21.4"
                  className="checkmark-kick"
                ></path>
              </svg>
            </div>
          </label>
        </Typography>
        <Box>
          <Typography
            variant="h6"
            component="img"
            src="https://media.ultimahora.com/adjuntos/169/imagenes/007/794/0007794606.jpg"
            className="imagen"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            marginRight: "13rem"
         
          }}
        >
          <Typography variant="h6">Antonio Sanchez Garcia</Typography>
          <Typography variant="h6">Villaverde</Typography>
        </Box>
        <Typography variant="body1"></Typography>
        <Typography variant="h2">
  <FaStar
    className={cardStates[3]?.isFavorite ? "star active" : "star"}
    onClick={() => handleFavoriteClick(3)}
    style={{ fontSize: "2rem",   color: cardStates[3]?.isFavorite ? "rgba(255, 217, 0, 0.993)" : "#b7b7b7" }}
  />
</Typography>
      </Box>
    </ TableContainer>
 
    </Box>
  );
};













