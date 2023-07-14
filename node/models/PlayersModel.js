import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
  {
    Nombre: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Estatura: { type: Number, required: true },
    Edad: { type: Number, required: true },
    Nacionalidad: { type: String, required: true },
    Posición: { type: String, required: true },
    Rating: { type: Number},
    Created_At: {type: Date, default: Date.now}
  },
  { collection: 'players',versionKey: false}
);

export default mongoose.model('PlayersModel', PlayerSchema);