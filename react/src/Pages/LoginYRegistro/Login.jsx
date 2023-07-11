// import React from 'react';
// import './register.css'; // archivo CSS para los estilos

//  export const Login = () => {
//   return (
//     <div className="login-container1">
//       <form className="loginForm">
//         <header className="Header">
//           <h1 className="headerTitle">INICIA SESIÓN</h1>
//         </header>
       
//         <input className="inputField" type="text" placeholder="Usuario" />
//         <input className="inputField" type="password" placeholder="Contraseña" />
//         <div className="Register">
//           <div className="registerContent">         
//             <a href="/" className="loginLink">Recupera tu contraseña</a>
//           </div>
//           <button className="registerButton">INICIAR SESIÓN</button>
//         </div>
//       </form>
//     </div>
//   );
// };






/*----------------------------------------CODIG BUENOOOOOOOOOOOOOOOOOOOOOOOOOOO------------*/
import "./register.css";
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../../AuthContext/AuthContext.js';
import axios from 'axios';
import {Button,TextField,Grid} from "@material-ui/core";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    
  
    try {
      const response = await axios.post('http://localhost:8000/users/login', {
        email,
        password,
      });

      // Verificar si el inicio de sesión fue exitoso
      if (response.status === 200) {
        let timerInterval;
        Swal.fire({
          title: 'Iniciando sesión',
          position: 'center',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
        setTimeout(() => {}, 5000);


        // Establecer el nombre de usuario en el contexto de autenticación

        // setUsername(name)
        // setName(response.data.name);
        login(); //función llamada que proviene del AuthContext

        // Redirigir al usuario a la página de administración después de iniciar sesión
        setTimeout(() => {
          navigate('/cuenta', {
            replace: true,
          });
        }, 3000);
      } else {
        // El inicio de sesión no fue exitoso, mostrar mensaje de error o realizar acciones adicionales si es necesario
      }
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        iconColor: 'black',
        confirmButtonColor: '#FF4000',
        title: 'Oops...',
        text: error.response.data.message,
        timer: 5500,
        toast: 'true',
        // footer:  error.response.data.message                            ,
        
      });
      console.error(error);
    }
  };

  const inputStyle = {
    backgroundColor: '#ffffff',
    height: '2.8rem',
  };
  return (
    <div className="login-container1">
      <form onSubmit={handleLogin} className="loginForm">
        <header className="Header">
          <h1 className="headerTitle">INICIA SESIÓN</h1>
        </header>
      <Grid container spacing={2}  style={{width:"75%",margin:"auto"}}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
      </Grid>
        
          <Button onClick={handleLogin} style={{background: '#C7F55C',marginTop:"0.5em"}} className=".MuiButton-root">
            INICIAR SESIÓN
          </Button>
          <div className="Register">
          <div className="loginContent">
            <a href="/" className="loginLink">
              Recupera tu contraseña
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
  

//*************************************ACABA EL CODIGO BUENOOOOOOOO************************************************************** */


     
      
        
      
      //   // Error en la solicitud de inicio de sesión
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'error',
      //     title: 'Error al iniciar sesión',
      //     text: 'Credenciales inválidas',
      //     timer: 3000,
      //     toast: true,
      //   });
    

      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'error',
      //   title: 'Error al iniciar sesión',
      //   text: 'Hubo un error al iniciar sesión',
      //   timer: 3000,
      //   toast: true,
      // });



      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'error',
      //     title: 'Error al iniciar sesión',
      //     text: 'Hubo un error en el inicio de sesión automático',
      //     timer: 3000,
      //     toast: true,
      //   });

      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'error',
      //   title: 'Error al iniciar sesión',
      //   text: 'Hubo un error en el inicio de sesión automático',
      //   timer: 3000,
      //   toast: true,
      // });
  
