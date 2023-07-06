// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const informSchema = new Schema(
//   {
//     PlayerId: { type: Schema.Types.ObjectId, ref: 'PlayersModel', required: true },
//     habilidades: [
//       {
//         Ofensiva: { type: Number, required: true },
//         Tecnica: { type: Number, required: true },
//         Movimiento: { type: Number, required: true },
//         Potencia: { type: Number, required: true },
//         Mentalidad: { type: Number, required: true },
//         Defensa: { type: Number, required: true },
//         Texto: { type: String, required: true }
//       }
//     ],
//     MediaInforme: { type: Number },
//     Created_At: {type: Date, default: Date.now}
//   },
//   { collection: 'informs' }
// );

// informSchema.pre('validate', function (next) {
//   const habilidades = this.habilidades[0]; // Accede a la primera habilidad del array habilidades

//   if (isNaN(habilidades.Ofensiva) || isNaN(habilidades.Tecnica)
//     || isNaN(habilidades.Movimiento) || isNaN(habilidades.Potencia)
//     || isNaN(habilidades.Mentalidad) || isNaN(habilidades.Defensa)) {
//     return next(new Error('Los valores de habilidades deben ser numéricos'));
//   }
//   next();
// });
// informSchema.pre('save', function (next) {
//   const habilidades = this.habilidades[0]; // Accede a la primera habilidad del array habilidades
//   const sumaHabilidades = habilidades.Ofensiva + habilidades.Tecnica + habilidades.Movimiento + habilidades.Potencia + habilidades.Mentalidad + habilidades.Defensa;
//   this.MediaInforme = sumaHabilidades / 6;
//   next();
// });

// export default mongoose.model('InformModel', informSchema);

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
      },
    ],
    // SkillsFísicas: [
    //   {
    //     Agilidad: { type: Number, required: true },
    //     Flexibilidad: { type: Number, required: true },
    //     Fuerza: { type: Number, required: true },
    //     Potencia: { type: Number, required: true },
    //     Resistencia: { type: Number, required:true},
    //     Salto: { type: Number,required:true },
    //     Velocidad: { type: String, required: true }

    //   }
    // ],

    Texto: { type: String, required: true },
    MediaInforme: { type: Number },
    Created_At: { type: Date, default: Date.now },
  },
  { collection: "informs", versionKey: false }
);

informSchema.pre("validate", function (next) {
  //SkillsPrincipales
  const SkillsPrincipales = this.SkillsPrincipales[0]; // Accede a la primera habilidad del array SkillsPrincipales
  if (
    isNaN(SkillsPrincipales.ControlDelBalón) ||
    isNaN(SkillsPrincipales.Asociación) ||
    isNaN(SkillsPrincipales.Disparo) ||
    isNaN(SkillsPrincipales.PieDerecho) ||
    isNaN(SkillsPrincipales.PasesLargos) ||
    isNaN(SkillsPrincipales.Dribling) ||
    isNaN(SkillsPrincipales.Centros) ||
    isNaN(SkillsPrincipales.Reflejos) ||
    isNaN(SkillsPrincipales.Cabeza) ||
    isNaN(SkillsPrincipales.PieIzquierdo)
  ) {
    return next(
      new Error("Los valores de SkillsPrincipales deben ser numéricos")
    );
  }
  next();
  //SkillsTacticas
  const SkillsTacticas = this.SkillsTacticas[0]; // Accede a la primera habilidad del array SkillsPrincipales
  if (
    isNaN(SkillsTacticas.Anticipación) ||
    isNaN(SkillsTacticas.Desmarque) ||
    isNaN(SkillsTacticas.Colocación) ||
    isNaN(SkillsTacticas.Posicionamientos) ||
    isNaN(SkillsTacticas.Concentración) ||
    isNaN(SkillsTacticas.VisiónDeJuego) ||
    isNaN(SkillsTacticas.Contundencia) ||
    isNaN(SkillsTacticas.Desdoble)
  ) {
    return next(new Error("Los valores de SkillsTacticas deben ser numéricos"));
  }
  next();
});

informSchema.pre("save", function (next) {
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
  this.MediaInforme = sumaSkillsPrincipales / 10;
  next();

  const SkillsTacticas = this.SkillsTacticas[0]; // Accede a la primera habilidad del array SkillsTacticas
  const sumaSkillsTacticas =
    SkillsTacticas.ControlDelBalón +
    SkillsTacticas.Disparo +
    SkillsTacticas.Cabeza +
    SkillsTacticas.Asociación +
    SkillsTacticas.PieDerecho +
    SkillsTacticas.PieIzquierdo +
    SkillsTacticas.PasesLargos +
    SkillsTacticas.Dribling +
    SkillsTacticas.Reflejos +
    SkillsTacticas.Centros;
  this.MediaInforme = sumaSkillsTacticas / 8;
  next();
});

export default mongoose.model("InformModel", informSchema);
