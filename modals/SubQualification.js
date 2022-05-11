const mongoose= require('mongoose')

const SubQualificationSchema = new mongoose.Schema({
     name: String,
     description: String,
     data_added: String,
     data_updated: String,
     qualification_id: String,
})

const SubQualification = mongoose.model('SubQualification', SubQualificationSchema)
module.exports = SubQualification