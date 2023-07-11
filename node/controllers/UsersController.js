import User from '../models/UsersModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;

 export const registerUser = async (req, res) => {
  try {
    const { nombre, apellidos, password, role, nif, club, pais, ciudad, telefono, email, cargo } = req.body;
    if (req.body.role){
      return res.status(400).json({ message: 'ERROR' });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'El email ya está en uso' });
    }

    if (!PWD_REGEX.test(password)) {
      return res.status(400).json({
        message: 'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial, y tener entre 8 y 24 caracteres.'
      });
    }

    const newUser = new User({ nombre, apellidos, password, role, nif, club, pais, ciudad, telefono, email, cargo });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPassword;

    const userCreate = await newUser.save();

    if (userCreate) {
      const token = uuidv4();
      console.log('Token:', token);
      userCreate.confirmationToken = token;
      await userCreate.save();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mseizduque@gmail.com',
          pass: 'Pepito1234!'
        }
      });

      const mailOptions = {
        from: 'mseizduque@gmail.com',
        to: userCreate.email,
        subject: 'Confirmación de correo electrónico',
        text: `Hola ${userCreate.nombre}, por favor haz clic en el siguiente enlace para confirmar tu correo electrónico:  http://localhost:3000/confirm/:token'`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo electrónico enviado: ' + info.response);
        }
      });

      return res.status(201).json({ message: 'Usuario registrado correctamente' });
    }

    return res.status(500).json({ message: 'Error al registrar el usuario' });
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};


 export const loginUser = async (req, res) => {
      try {
  
          const { email, password } = req.body;
          const existingUser = await User.findOne({email});
  
  
          if (!existingUser) {
              return res.status(400).json({ message: 'El usuario no existe' });
          }
          else{
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: 'Contraseña incorrecta' });
            }
            else{
              if (!existingUser.confirmationToken) {
                return res.status(400).json({ message: 'El usuario no está validado,porfavor revisa tu email.' });
            }
  
            }
  
          }
  
          const token = jwt.sign(
              { userId: existingUser._id, username: existingUser.name },
              'dssdgsggsdds' // Reemplaza con tu secreto para el token
          );
  
          res.status(200).json({ token });
          console.log(token)
      } catch (error) {
          res.status(500).json({ message: 'Error al iniciar sesión' });
      }
  };