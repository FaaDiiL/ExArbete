const Qualification = require('../modals/Qualification')
const SubQualification = require('../modals/SubQualification')

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
               throw err
          }
     },
    // Get qualification by id
    getQualificationById: async (parent, args) => {
      // find the qualification with the id matching the id passed as argument
      const qualificationId = args.id
      // Return the qualification with the id matching the id passed as argument
      return await Qualification.findById(qualificationId)
    },
  },

  Mutation: {
    // Create a new qualification and return the new qualification object
    createQualification: async (parent, args, context, info) => {
      const { qualification } = args
      try {
        // Create a new qualification object
        const newQualification = new Qualification({
          ...qualification,
          name: args.qualification.name,
          area: args.qualification.area,
          type: args.qualification.type,
          access: args.qualification.access,
          description: args.qualification.description,
          eqf: args.qualification.eqf,
          language: args.qualification.language,
          date_added: new Date().toISOString(),
          date_updated: args.qualification.date_updated,
        })
        // Save the new qualification object
        await newQualification.save()
        // Return the new qualification object
        return newQualification
      } catch (error) {
        throw new Error(error)
      }
    },
    // Update a qualification and return the updated qualification object
    updateQualification: async (parent, args, context, info) => {
      const qualificationId = args.id
      const qualification = args.qualification
      try {
        // Find the qualification with the id matching the id passed as argument
        const updatedQualification = await Qualification.findByIdAndUpdate(
          qualificationId,
          {
            $set: {
              name: qualification.name,
              area: qualification.area,
              type: qualification.type,
              access: qualification.access,
              description: qualification.description,
              eqf: qualification.eqf,
              language: qualification.language,
              date_updated: new Date().toISOString(),
            },
          },
          { new: true }
        )
        // Return the updated qualification object
        return updatedQualification
      } catch (error) {
        throw new Error(error)
      }
    },
    // Delete a qualification and return the deleted qualification object
    deleteQualificationById: async (parent, args, context, info) => {
      const qualificationId = args.id
      return await Qualification.findByIdAndDelete(qualificationId)
    },
  },
}

module.exports = { resolvers }
