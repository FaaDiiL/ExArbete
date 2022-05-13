const mongoose= require('mongoose')


const QualificationSchema = new mongoose.Schema({
     name: String,
     area: String,
     type: String,
     access: String,
     description: String,
     eqf: {
          type:Number,
          min:0,
          max:8,
          default:0
     },
     language: String,
     date_added: {
          type: Date,
          immutable:true,
          default: () => Date.now(),
     },
     date_updated: {
          type: Date,
          default: () => Date.now(),
     },
})

const Qualification = mongoose.model('Qualification', QualificationSchema)
module.exports = Qualification