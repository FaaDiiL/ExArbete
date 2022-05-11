const mongoose= require('mongoose')

const QualificationSchema = new mongoose.Schema({
     name: String,
     area: String,
     type: String,
     access: String,
     description: String,
     eqf: String,
     language: String,
     date_added: String,
     date_updated: String,
})

const Qualification = mongoose.model('Qualification', QualificationSchema)
module.exports = Qualification