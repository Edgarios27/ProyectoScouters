import mongoose from "mongoose";

const Schema = mongoose.Schema;

const informSchema = new Schema(
  {
    PlayerId: {
      type: Schema.Types.ObjectId,
      ref: "PlayersModel",
      required: true,
    },
    SkillsPrincipales: [
      {
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
        Texto: { type: String, required: true },
        MediaInforme: { type: Number },
      },
    ],
    SkillsTacticas: [
      {
        Anticipación: { type: Number, required: true },
        Colocación: { type: Number, required: true },
        Concentración: { type: Number, required: true },
        Contundencia: { type: Number, required: true },
        Desdoble: { type: Number, required: true },
        Desmarque: { type: Number, required: true },
        Posicionamientos: { type: Number, required: true },
        VisiónDeJuego: { type: Number, required: true },
        Texto: { type: String, required: true },
        MediaInforme: { type: Number },
      },
    ],
    SkillsFísicas: [
      {
        Agilidad: { type: Number, required: true },
        Flexibilidad: { type: Number, required: true },
        Fuerza: { type: Number, required: true },
        Potencia: { type: Number, required: true },
        Resistencia: { type: Number, required: true },
        Salto: { type: Number, required: true },
        Velocidad: { type: Number, required: true },
        Texto: { type: String, required: true },
        MediaInforme: { type: Number },
      }
    ],
    MediaInforme: { type: Number },
    Created_At: { type: Date, default: Date.now },
  },
  { collection: "informs", versionKey: false }
);


informSchema.pre('save', function (next) {
  const SkillsPrincipales = this.SkillsPrincipales[0]; // Accede a la primera habilidad del array SkillsPrincipales
  const sumaSkillsPrincipales =
    SkillsPrincipales.ControlDelBalón +
    SkillsPrincipales.Disparo +
    SkillsPrincipales.Cabeza +
    SkillsPrincipales.Asociación +
    SkillsPrincipales.PieDerecho +
    SkillsPrincipales.PieIzquierdo +
    SkillsPrincipales.PasesLargos +
    SkillsPrincipales.Dribling +
    SkillsPrincipales.Reflejos +
    SkillsPrincipales.Centros;
  SkillsPrincipales.MediaInforme = sumaSkillsPrincipales / 10;

  const SkillsTacticas = this.SkillsTacticas[0]; // Accede a la primera habilidad del array SkillsTacticas
  const sumaSkillsTacticas =
    SkillsTacticas.Anticipación +
    SkillsTacticas.Colocación +
    SkillsTacticas.Concentración +
    SkillsTacticas.Contundencia +
    SkillsTacticas.Desdoble +
    SkillsTacticas.Desmarque +
    SkillsTacticas.Posicionamientos +
    SkillsTacticas.VisiónDeJuego;
  SkillsTacticas.MediaInforme = sumaSkillsTacticas / 8;

  const SkillsFísicas = this.SkillsFísicas[0]; // Accede a la primera habilidad del array SkillsFísicas
  const sumaSkillsFísicas =
    SkillsFísicas.Agilidad +
    SkillsFísicas.Flexibilidad +
    SkillsFísicas.Fuerza +
    SkillsFísicas.Potencia +
    SkillsFísicas.Resistencia +
    SkillsFísicas.Salto +
    SkillsFísicas.Velocidad;
  SkillsFísicas.MediaInforme = sumaSkillsFísicas / 7;

  this.MediaInforme = (SkillsPrincipales.MediaInforme + SkillsTacticas.MediaInforme + SkillsFísicas.MediaInforme) / 3;

  next();
});

export default mongoose.model("InformModel", informSchema)
