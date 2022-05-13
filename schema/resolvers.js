const Qualification = require('../models/Qualification_model')
const SubQualification = require('../models/SubQualification_model')

const resolvers = {
  Query: {
    /* -------------------- GET -------------------- */
    /* --------- Qualification --------- */
    // Get all qualifications
    getQualifications: async () => {
      try {
        const qualifications = await Qualification.find()
        return qualifications
      } catch (err) {
        throw error
      }
    },
    // Get qualification by id
    getQualificationById: async (parent, args) => {
      // find the qualification with the id matching the id passed as argument
      const qualificationId = args.id
      try {
        // Return the qualification with the id matching the id passed as argument
        return await Qualification.findById(qualificationId)
      } catch (error) {
        throw error
      }
    },
    /* --------- SubQualification --------- */
    // Get all subQualifications with a qualification_id matching the id passed as argument
    getSubQualifications: async (parent, args) => {
      // find the subQualifications with the qualification_id matching the id passed as argument
      const qualificationId = args.id
      try {
        // Return the subQualifications with the qualification_id matching the id passed as argument
        return await SubQualification.find({ qualification_id: qualificationId })
      } catch (error) {
        throw error
      }
    },

    // Get subqualification by id
    getSubQualificationById: async (parent, args) => {
      // find the subqualification with the id matching the id passed as argument
      const subQualificationId = args.id
      try {
        // Return the subqualification with the id matching the id passed as argument
        return await SubQualification.findById(subQualificationId)
      } catch (error) {
        throw error
      }
    }
  },

  Mutation: {
    // Create a new qualification
    createQualification: async (parent, args, context, info) => {
      const { qualification } = args
      try {
        // Create a new qualification object
        const newQualification = new Qualification({
          ...qualification,
          date_updated: null,
        })
        // Save the new qualification object
        await newQualification.save()
        // Return the new qualification object
        return newQualification
      } catch (error) {
        throw error
      }
    },

    // Update a qualification
    updateQualification: async (parent, args, context, info) => {
      const qualificationId = args.id
      const qualification = args.qualification
      try {
        // Find the qualification with the id matching the id passed as argument
        const updatedQualification = await Qualification.findByIdAndUpdate(
          qualificationId,
          {
            $set: {
              ...qualification,
              date_updated: new Date().toISOString(),
            },
          },
          { new: true }
        )
        // Return the updated qualification object
        return updatedQualification
      } catch (error) {
        throw error
      }
    },

    // Delete a qualification
    deleteQualificationById: async (parent, args, context, info) => {
      const qualificationId = args.id
      try {
        return await Qualification.findByIdAndDelete(qualificationId)
      } catch (error) {
        throw error
      }
    },

    // Create a new subqualification
    createSubQualification: async (parent, args, context, info) => {
      const { subQualification } = args
      try {
        // Create a new subqualification object
        const newSubQualification = new SubQualification({
          ...subQualification,
          date_updated: null,
        })
        // Save the new subqualification object
        await newSubQualification.save()
        // Return the new subqualification object
        return newSubQualification
      } catch (error) {
        throw error
      }
    },

    // Update a subqualification
    updateSubQualification: async (parent, args, context, info) => {
      const subQualificationId = args.id
      const subQualification = args.subQualification
      try {
        // Find the subqualification with the id matching the id passed as argument
        const updatedSubQualification = await SubQualification.findByIdAndUpdate(
          subQualificationId,
          {
            $set: {
              ...subQualification,
              date_updated: new Date().toISOString(),
            },
          },
          { new: true }
        )
        // Return the updated subqualification object
        return updatedSubQualification
      } catch (error) {
        throw error
      }
    },
    
    // Delete a subqualification
    deleteSubQualificationById: async (parent, args, context, info) => {
      const subQualificationId = args.id
      try {
        return await SubQualification.findByIdAndDelete(subQualificationId)
      }
      catch (error) {
        throw error
      }
    }
  }
}


module.exports = { resolvers }

