import InformModel from '../models/InformModel.js';
import PmetricsModel from '../models/PMetricsModel.js';
import PlayersModel from '../models/PlayersModel.js';

// Obtener los datos de la colección "player-metrics"
export const getPlayerMetrics = async (req, res) => {
  try {
    const playerMetrics = await PmetricsModel.find();
    res.json(playerMetrics);
  } catch (error) {
    console.error('Error al obtener los datos de la colección "player-metrics":', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

// // Calcular la media de Media de Skillsprincipales y la MediaGlobal y almacenarlas en la colección "player-metrics"
// export const calculatePlayerMetrics = async (id) => {
//   try {
//     console.log(id);
//     const Skillsprincipales = await InformModel.find({PlayerId: id}); // Obtener todos los informes
//     console.log(Skillsprincipales)
//     const playerMetrics = {};
//     let totalMediaInforme = 0; // Variable para almacenar la suma de todas las MediaInforme
//     let totalInformes = 0; // Variable para almacenar el número total de informes

//     // Calcular la media de habilidades para cada jugador y la suma de todas las MediaInforme
//     Skillsprincipales.forEach((principales) => {
//       const playerId = principales.PlayerId.toString();
//       const SkillsPrincipales = principales.SkillsPrincipales[0];

//       if (!playerMetrics[playerId]) {
//         playerMetrics[playerId] = {
//           ControlDelBalón: [],
//           Disparo: [],
//           Cabeza: [],
//           Asociación: [],
//           PieDerecho: [],
//           PieIzquierdo: [],
//           PasesLargos: [],
//           Dribling: [],
//           Reflejos: [],
//           Centros: [],
//           totalMediaInforme: 0,
//           informCount: 0,
//         };
//       }

//       playerMetrics[playerId].ControlDelBalón.push(SkillsPrincipales.ControlDelBalón);
//       playerMetrics[playerId].Disparo.push(SkillsPrincipales.Disparo);
//       playerMetrics[playerId].Cabeza.push(SkillsPrincipales.Cabeza);
//       playerMetrics[playerId].Asociación.push(SkillsPrincipales.Asociación);
//       playerMetrics[playerId].PieDerecho.push(SkillsPrincipales.PieDerecho);
//       playerMetrics[playerId].PieIzquierdo.push(SkillsPrincipales.PieIzquierdo);
//       playerMetrics[playerId].PasesLargos.push(SkillsPrincipales.PasesLargos);
//       playerMetrics[playerId].Dribling.push(SkillsPrincipales.Dribling);
//       playerMetrics[playerId].Reflejos.push(SkillsPrincipales.Reflejos);
//       playerMetrics[playerId].Centros.push(SkillsPrincipales.Centros);

//       playerMetrics[playerId].totalMediaInforme += principales.MediaInforme;
//       playerMetrics[playerId].informCount++;
//       totalMediaInforme += principales.MediaInforme;
//       totalInformes++;
//     });

//     // Calcular la media de habilidades para cada jugador y actualizar la MediaGlobal
//     for (let playerId in playerMetrics) {
//       const playerMetric = playerMetrics[playerId];

//       const mediaControlDelBalón = calculateAverage(playerMetric.ControlDelBalón);
//       const mediaDisparo = calculateAverage(playerMetric.Disparo);
//       const mediaCabeza = calculateAverage(playerMetric.Cabeza);
//       const mediaAsociación = calculateAverage(playerMetric.Asociación);
//       const mediaPieDerecho = calculateAverage(playerMetric.PieDerecho);
//       const mediaPieIzquierdo = calculateAverage(playerMetric.PieIzquierdo);
//       const mediaPasesLargos = calculateAverage(playerMetric.PasesLargos);
//       const mediaDribling = calculateAverage(playerMetric.Dribling);
//       const mediaReflejos = calculateAverage(playerMetric.Reflejos);
//       const mediaCentros = calculateAverage(playerMetric.Centros);

//       const mediaGlobal = playerMetric.informCount > 0
//         ? playerMetric.totalMediaInforme / playerMetric.informCount
//         : 0;

//       const existingPlayerMetric = await PmetricsModel.findOne({ PlayerId: playerId });

//       if (existingPlayerMetric) {
//         // Actualizar el documento existente con los nuevos valores
//         existingPlayerMetric.ControlDelBalón = mediaControlDelBalón;
//         existingPlayerMetric.Disparo = mediaDisparo;
//         existingPlayerMetric.Cabeza = mediaCabeza;
//         existingPlayerMetric.Asociación = mediaAsociación;
//         existingPlayerMetric.PieDerecho = mediaPieDerecho;
//         existingPlayerMetric.PieIzquierdo = mediaPieIzquierdo;
//         existingPlayerMetric.PasesLargos = mediaPasesLargos;
//         existingPlayerMetric.Dribling = mediaDribling;
//         existingPlayerMetric.Reflejos = mediaReflejos;
//         existingPlayerMetric.Centros = mediaCentros;
//         existingPlayerMetric.mediaGlobal = mediaGlobal;
//         await existingPlayerMetric.save();
//       } else {
//         // Crear un nuevo documento si no existe uno con el mismo PlayerId
//         const newPlayerMetric = new PmetricsModel({
//           PlayerId: playerId,
//           ControlDelBalón: mediaControlDelBalón,
//           Disparo: mediaDisparo,
//           Cabeza: mediaCabeza,
//           Asociación: mediaAsociación,
//           PieDerecho: mediaPieDerecho,
//           PieIzquierdo: mediaPieIzquierdo,
//           PasesLargos: mediaPasesLargos,
//           Dribling: mediaDribling,
//           Reflejos: mediaReflejos,
//           Centros: mediaCentros,
//           PasesLargos: mediaPasesLargos,
//           mediaGlobal: mediaGlobal,
//         });

//         await newPlayerMetric.save();
//       }
//     }

//     // Calcular el rating de jugador
//     const globalMediaGlobal = totalInformes > 0
//       ? totalMediaInforme / totalInformes
//       : 0;

//     console.log(globalMediaGlobal);

//     // Actualizar el campo Rating de todos los jugadores en la colección Players
//     // await PlayersModel.updateOne({id: id}, { Rating: globalMediaGlobal });

//     try {
//       const MetricUpdated = await PlayersModel.updateOne({_id: id}, { Rating: globalMediaGlobal });
//       console.log(MetricUpdated)
//     } catch (error) {
//       console.log(error)
//     }

//     console.log('Cálculo de métricas de jugador completado');

//     // ... puedes realizar otras acciones o retornar algún valor si es necesario
//   } catch (error) {
//     console.error('Error al calcular las métricas de jugador:', error);
//   }
// };

export const calculatePlayerMetrics = async (id) => {
  try {
    // console.log(id);
    const informs = await InformModel.find({ PlayerId: id }); // Obtener todos los informes
    // console.log(informs);
    const playerMetrics = {};
    let totalMediaInforme = 0; // Variable para almacenar la suma de todas las MediaInforme
    let totalInformes = 0; // Variable para almacenar el número total de informes

    // Calcular la media de habilidades para cada jugador y la suma de todas las MediaInforme
    informs.forEach((inform) => {
      const playerId = inform.PlayerId.toString();

      // SkillsPrincipales
      const skillsPrincipales = inform.SkillsPrincipales[0];

      if (!playerMetrics[playerId]) {
        playerMetrics[playerId] = {
          SkillsPrincipales: {
            ControlDelBalón: [],
            Disparo: [],
            Cabeza: [],
            Asociación: [],
            PieDerecho: [],
            PieIzquierdo: [],
            PasesLargos: [],
            Dribling: [],
            Reflejos: [],
            Centros: [],
            mediaPrincipales: [],
            totalMediaInforme: 0,
            informCount: 0,
          },
          SkillsTacticas: {
            Anticipación: [],
            Colocación: [],
            Concentración: [],
            Contundencia: [],
            Desdoble: [],
            Desmarque: [],
            Posicionamientos: [],
            VisiónDeJuego: [],
            mediaTacticas: [],
            totalMediaInforme: 0,
            informCount: 0,
          },
          SkillsFísicas: {
            Agilidad: [],
            Flexibilidad: [],
            Fuerza: [],
            Potencia: [],
            Resistencia: [],
            Salto: [],
            Velocidad: [],
            mediaFísicas: [],
            totalMediaInforme: 0,
            informCount: 0,
          },
          Created_At: Date.now(),
          mediaGlobal: [],
        };
      }

      // SkillsPrincipales
      const skillsPrincipalesMetrics = playerMetrics[playerId].SkillsPrincipales;
      skillsPrincipalesMetrics.ControlDelBalón.push(skillsPrincipales.ControlDelBalón);
      skillsPrincipalesMetrics.Disparo.push(skillsPrincipales.Disparo);
      skillsPrincipalesMetrics.Cabeza.push(skillsPrincipales.Cabeza);
      skillsPrincipalesMetrics.Asociación.push(skillsPrincipales.Asociación);
      skillsPrincipalesMetrics.PieDerecho.push(skillsPrincipales.PieDerecho);
      skillsPrincipalesMetrics.PieIzquierdo.push(skillsPrincipales.PieIzquierdo);
      skillsPrincipalesMetrics.PasesLargos.push(skillsPrincipales.PasesLargos);
      skillsPrincipalesMetrics.Dribling.push(skillsPrincipales.Dribling);
      skillsPrincipalesMetrics.Reflejos.push(skillsPrincipales.Reflejos);
      skillsPrincipalesMetrics.Centros.push(skillsPrincipales.Centros);

      // SkillsTacticas
      const skillsTacticas = inform.SkillsTacticas[0];
      const skillsTacticasMetrics = playerMetrics[playerId].SkillsTacticas;
      skillsTacticasMetrics.Anticipación.push(skillsTacticas.Anticipación);
      skillsTacticasMetrics.Colocación.push(skillsTacticas.Colocación);
      skillsTacticasMetrics.Concentración.push(skillsTacticas.Concentración);
      skillsTacticasMetrics.Contundencia.push(skillsTacticas.Contundencia);
      skillsTacticasMetrics.Desdoble.push(skillsTacticas.Desdoble);
      skillsTacticasMetrics.Desmarque.push(skillsTacticas.Desmarque);
      skillsTacticasMetrics.Posicionamientos.push(skillsTacticas.Posicionamientos);
      skillsTacticasMetrics.VisiónDeJuego.push(skillsTacticas.VisiónDeJuego);

      // SkillsFísicas
      const skillsFísicas = inform.SkillsFísicas[0];
      const skillsFísicasMetrics = playerMetrics[playerId].SkillsFísicas;
      skillsFísicasMetrics.Agilidad.push(skillsFísicas.Agilidad);
      skillsFísicasMetrics.Flexibilidad.push(skillsFísicas.Flexibilidad);
      skillsFísicasMetrics.Fuerza.push(skillsFísicas.Fuerza);
      skillsFísicasMetrics.Potencia.push(skillsFísicas.Potencia);
      skillsFísicasMetrics.Resistencia.push(skillsFísicas.Resistencia);
      skillsFísicasMetrics.Salto.push(skillsFísicas.Salto);
      skillsFísicasMetrics.Velocidad.push(skillsFísicas.Velocidad);

      playerMetrics[playerId].totalMediaInforme += inform.MediaInforme;
      playerMetrics[playerId].informCount++;
      totalMediaInforme += inform.MediaInforme;
      totalInformes++;
    });

    // Calcular la media de habilidades para cada jugador y actualizar la MediaGlobal
    for (let playerId in playerMetrics) {
      const playerMetric = playerMetrics[playerId];

      // SkillsPrincipales
      const skillsPrincipalesMetrics = playerMetric.SkillsPrincipales;
      const mediaControlDelBalón = calculateAverage(skillsPrincipalesMetrics.ControlDelBalón);
      const mediaDisparo = calculateAverage(skillsPrincipalesMetrics.Disparo);
      const mediaCabeza = calculateAverage(skillsPrincipalesMetrics.Cabeza);
      const mediaAsociación = calculateAverage(skillsPrincipalesMetrics.Asociación);
      const mediaPieDerecho = calculateAverage(skillsPrincipalesMetrics.PieDerecho);
      const mediaPieIzquierdo = calculateAverage(skillsPrincipalesMetrics.PieIzquierdo);
      const mediaPasesLargos = calculateAverage(skillsPrincipalesMetrics.PasesLargos);
      const mediaDribling = calculateAverage(skillsPrincipalesMetrics.Dribling);
      const mediaReflejos = calculateAverage(skillsPrincipalesMetrics.Reflejos);
      const mediaCentros = calculateAverage(skillsPrincipalesMetrics.Centros);


      // SkillsTacticas
      const skillsTacticasMetrics = playerMetric.SkillsTacticas;
      const mediaAnticipación = calculateAverage(skillsTacticasMetrics.Anticipación);
      const mediaColocación = calculateAverage(skillsTacticasMetrics.Colocación);
      const mediaConcentración = calculateAverage(skillsTacticasMetrics.Concentración);
      const mediaContundencia = calculateAverage(skillsTacticasMetrics.Contundencia);
      const mediaDesdoble = calculateAverage(skillsTacticasMetrics.Desdoble);
      const mediaDesmarque = calculateAverage(skillsTacticasMetrics.Desmarque);
      const mediaPosicionamientos = calculateAverage(skillsTacticasMetrics.Posicionamientos);
      const mediaVisiónDeJuego = calculateAverage(skillsTacticasMetrics.VisiónDeJuego);

      // SkillsFísicas
      const skillsFísicasMetrics = playerMetric.SkillsFísicas;
      const mediaAgilidad = calculateAverage(skillsFísicasMetrics.Agilidad);
      const mediaFlexibilidad = calculateAverage(skillsFísicasMetrics.Flexibilidad);
      const mediaFuerza = calculateAverage(skillsFísicasMetrics.Fuerza);
      const mediaPotencia = calculateAverage(skillsFísicasMetrics.Potencia);
      const mediaResistencia = calculateAverage(skillsFísicasMetrics.Resistencia);
      const mediaSalto = calculateAverage(skillsFísicasMetrics.Salto);
      const mediaVelocidad = calculateAverage(skillsFísicasMetrics.Velocidad);

      const mediaGlobalPrincipales = playerMetric.informCount > 0 ? playerMetric.totalMediaInforme / playerMetric.informCount : 0;
      const mediaGlobalTacticas = playerMetric.informCount > 0 ? playerMetric.totalMediaInforme / playerMetric.informCount : 0;
      const mediaGlobalFísicas = playerMetric.informCount > 0 ? playerMetric.totalMediaInforme / playerMetric.informCount : 0;

      const existingPlayerMetric = await PmetricsModel.findOne({ PlayerId: playerId });
      if (existingPlayerMetric) {
        // Actualizar el documento existente con los nuevos valores
        existingPlayerMetric.ControlDelBalón = mediaControlDelBalón;
        existingPlayerMetric.Disparo = mediaDisparo;
        existingPlayerMetric.Cabeza = mediaCabeza;
        existingPlayerMetric.Asociación = mediaAsociación;
        existingPlayerMetric.PieDerecho = mediaPieDerecho;
        existingPlayerMetric.PieIzquierdo = mediaPieIzquierdo;
        existingPlayerMetric.PasesLargos = mediaPasesLargos;
        existingPlayerMetric.Dribling = mediaDribling;
        existingPlayerMetric.Reflejos = mediaReflejos;
        existingPlayerMetric.Centros = mediaCentros;

        existingPlayerMetric.Anticipación = mediaAnticipación;
        existingPlayerMetric.Colocación = mediaColocación;
        existingPlayerMetric.Concentración = mediaConcentración;
        existingPlayerMetric.Contundencia = mediaContundencia;
        existingPlayerMetric.Desdoble = mediaDesdoble;
        existingPlayerMetric.Desmarque = mediaDesmarque;
        existingPlayerMetric.Posicionamientos = mediaPosicionamientos;
        existingPlayerMetric.VisiónDeJuego = mediaVisiónDeJuego;

        existingPlayerMetric.Agilidad = mediaAgilidad;
        existingPlayerMetric.Flexibilidad = mediaFlexibilidad;
        existingPlayerMetric.Fuerza = mediaFuerza;
        existingPlayerMetric.Potencia = mediaPotencia;
        existingPlayerMetric.Resistencia = mediaResistencia;
        existingPlayerMetric.Salto = mediaSalto;
        existingPlayerMetric.Velocidad = mediaVelocidad;

        existingPlayerMetric.mediaGlobalPrincipales = mediaGlobalPrincipales;
        existingPlayerMetric.mediaGlobalTacticas = mediaGlobalTacticas;
        existingPlayerMetric.mediaGlobalFísicas = mediaGlobalFísicas;
        console.log(existingPlayerMetric)

        await existingPlayerMetric.save();
      } else {
        // Crear un nuevo documento si no existe uno con el mismo PlayerId
        const newPlayerMetric = new PmetricsModel({
          PlayerId: playerId,
          ControlDelBalón: mediaControlDelBalón,
          Disparo: mediaDisparo,
          Cabeza: mediaCabeza,
          Asociación: mediaAsociación,
          PieDerecho: mediaPieDerecho,
          PieIzquierdo: mediaPieIzquierdo,
          PasesLargos: mediaPasesLargos,
          Dribling: mediaDribling,
          Reflejos: mediaReflejos,
          Centros: mediaCentros,

          Anticipación: mediaAnticipación,
          Colocación: mediaColocación,
          Concentración: mediaConcentración,
          Contundencia: mediaContundencia,
          Desdoble: mediaDesdoble,
          Desmarque: mediaDesmarque,
          Posicionamientos: mediaPosicionamientos,
          VisiónDeJuego: mediaVisiónDeJuego,

          Agilidad: mediaAgilidad,
          Flexibilidad: mediaFlexibilidad,
          Fuerza: mediaFuerza,
          Potencia: mediaPotencia,
          Resistencia: mediaResistencia,
          Salto: mediaSalto,
          Velocidad: mediaVelocidad,

          mediaGlobalPrincipales: mediaGlobalPrincipales,
          mediaGlobalTacticas: mediaGlobalTacticas,
          mediaGlobalFísicas: mediaGlobalFísicas,
        });

        await newPlayerMetric.save();
      }
    }

    // Calcular el rating de jugador
    const globalMediaGlobal = totalInformes > 0 ? totalMediaInforme / totalInformes : 0;
    console.log(globalMediaGlobal);

    try {
      const MetricUpdated = await PlayersModel.updateOne({ _id: id }, { Rating: globalMediaGlobal });
      console.log(MetricUpdated);
    } catch (error) {
      console.log(error);
    }

    console.log('Cálculo de métricas de jugador completado');

    // ... puedes realizar otras acciones o retornar algún valor si es necesario
  } catch (error) {
    console.error('Error al calcular las métricas de jugador:', error);
  }
};


// Calcular el promedio de un arreglo de números
const calculateAverage = (array) => {
  const sum = array.reduce((a, b) => a + b, 0);
  const average = sum / array.length;
  return isNaN(average) ? 0 : average;
};