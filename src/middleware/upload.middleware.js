const multer = require('multer')
const path = require('path')
const acceptedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg']

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, callback) => {
      const date = Date.now()
      callback(null, `${date}-${file.originalname}`)
    }
  }),
  limits: {
    fieldSize: 100000
  },
  fileFilter: (req, file, callback) => {
    const { mimetype } = file

    if (!acceptedTypes.includes(mimetype)) {
      const error = new Error(`Solo ${acceptedTypes}`)
      error.status = 400
      error.errorName = 'Archivo no alojado'
      return callback(error)
    }
    callback(null, true)
  }
})

module.exports = upload
