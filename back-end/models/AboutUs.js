const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutUsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    img: {
        type: String,
        required: true,
    }
  }
)

// create mongoose Model
const Aboutus = mongoose.model('Aboutus', aboutUsSchema)

// export the model so other modules can import it
module.exports = {
  Aboutus,
}
