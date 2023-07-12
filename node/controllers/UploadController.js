import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const uploadImage = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(404).send({
        success: "Error",
        error: 'Error al subir la imagen',
      });
    }
    console.log(req.file);
    return res.status(200).send({
      success: "Ok",
      message: 'Imagen subida con éxito',
    });
  });
};
