import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pmetricsSchema = new Schema(
  {
    PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel' },
    ControlDelBalón: { type: Number, required: true },
    Disparo: { type: Number, required: true },
    Cabeza: { type: Number, required: true },
    Asociación: { type: Number, required: true },
    PieDerecho: { type: Number },
    PieIzquierdo: { type: Number },
    PasesLargos: { type: Number, required: true },
    Dribling: { type: Number, required: true },
    Reflejos: { type: Number, required: true },
    Centros: { type: Number, required: true },
    Created_At: { type: Date, default: Date.now },
    mediaGlobal: { type: Number }
  },
  {
    PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel' },
    Anticipación: { type: Number, required: true },
    Colocación: { type: Number, required: true },
    Concentración: { type: Number, required: true },
    Contundencia: { type: Number, required: true },
    Desdoble: { type: Number, required: true },
    Desmarque: { type: Number, required: true },
    Posicionamientos: { type: Number, required: true },
    VisiónDeJuego: { type: Number, required: true },

    Created_At: { type: Date, default: Date.now },
    mediaGlobal: { type: Number }
  },
  { collection: 'playermetrics' }
);

// Redondear las medias de habilidades y la media global hacia números enteros
pmetricsSchema.pre('save', function (next) {
  this.ControlDelBalón = Math.round(this.ControlDelBalón);
  this.Disparo = Math.round(this.Disparo);
  this.Cabeza = Math.round(this.Cabeza);
  this.Asociación = Math.round(this.Asociación);
  this.PieDerecho = Math.round(this.PieDerecho);
  this.PieIzquierdo = Math.round(this.PieIzquierdo);
  this.PasesLargos = Math.round(this.PasesLargos);
  this.Dribling = Math.round(this.Dribling);
  this.Reflejos = Math.round(this.Reflejos);
  this.Centros = Math.round(this.Centros);
  this.mediaGlobal = Math.round(this.mediaGlobal);

  this.Anticipación = Math.round(this.Anticipación);
  this.Colocación = Math.round(this.Colocación);
  this.Concentración = Math.round(this.Concentración);
  this.Contundencia = Math.round(this.Contundencia);
  this.Desdoble = Math.round(this.Desdoble);
  this.Desmarque = Math.round(this.Desmarque);
  this.Posicionamientos = Math.round(this.Posicionamientos);
  this.VisiónDeJuego = Math.round(this.VisiónDeJuego);

  next();
});

const PmetricsModel = mongoose.model('PmetricsModel', pmetricsSchema);

export default PmetricsModel;

