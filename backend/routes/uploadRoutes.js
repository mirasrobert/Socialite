const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/') // Upload folder
  },
  filename(req, file, callback) {
    callback(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}` // Filename
    )
  },
})

// validate image format
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.text(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    return cb('Invalid image format')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`) // Path
})

module.exports = router
