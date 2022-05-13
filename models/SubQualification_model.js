const mongoose= require('mongoose')
const Qualification = require('./Qualification_model')
const SubQualificationSchema = new mongoose.Schema({
     name: String,
     description: String,
     data_added: String,
     data_updated: String,
     qualification_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: Qualification,
          required:true,
          index: true
     }
})

const SubQualification = mongoose.model('SubQualification', SubQualificationSchema)
module.exports = SubQualification