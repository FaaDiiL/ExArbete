const QualificationList = [
     {
          id: 6,
          data_added: "2022-04-18 22:58:46.928576",
          data_updated: "2022-04-25 11:38:46.795216",
          access: "Test qualification access SAAB 1",
          area: "Test qualification area SAAB 1",
          description: "Test qualification description SAAB 1",
          eqf: 1,
          language: "ENGLISH",
          name: "Test qualification name SAAB 1",
          type: "Test qualification type SAAB 1",
          subQualificationsId: [ 1, 2 ]
        },
        {
          id: 7,
          data_added: "2022-04-20 11:27:25.323230",
          data_updated: "2022-04-25 11:35:22.308477",
          access: "Behörighet",
          area: "Bransch",
          description: "Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... Beskrivning ... ",
          eqf: 1,
          language: "SWEDISH",
          name: "Test kvalifikation",
          type: "Kvalifikation",
          subQualifications: [
            {
              id: 2,
              name: "name 2",
              description: "description 2",
              data_added: "2022-04-18",
              data_updated: "2022-04-18",
            }
          ]
        },
        {
          id: 8,
          data_added: "2022-04-25 09:31:54.594141",
          data_updated: "2022-04-25 11:38:44.248552",
          access: "Administrering av hemsidor",
          area: "Admin",
          description: "Administration beskrivning",
          eqf: 5,
          language: "SWEDISH",
          name: "Test qualification name 2",
          type: "Kvalifikation",
          subQualifications: [
            {
              id: 3,
              name: "name 3",
              description: "description 3",
              data_added: "2022-04-18",
              data_updated: "2022-04-18",
          }
          ]
        },
        {
          id: 9,
          data_added: "2022-04-25 09:33:59.534635",
          data_updated: "2022-04-25 11:38:45.484685",
          access: "Administrativ behörighet 2",
          area: "Admin",
          description: "Beskrivning",
          eqf: 3,
          language: "SWEDISH",
          name: "Test qualification name 3",
          type: "Kvalifikation",
          subQualifications: [
            {
              id: 4,
              name: "name 4",
              description: "description 4",
              data_added: "2022-04-18",
              data_updated: "2022-04-18",
            }  
          ]
        },
        {
          id: 10,
          data_added: "2022-04-25 09:36:52.308138",
          data_updated: "2022-04-25 11:38:42.649338",
          access: "Bil mekaniker - Motor",
          area: "Mekaniker",
          description: "Mekaniker specialiserad inom motorer.",
          eqf: 8,
          language: "SWEDISH",
          name: "Bil mekaniker",
          type: "Kvalifikation",
          subQualifications: []
        },
        {
          id: 11,
          data_added: "2022-04-25 11:16:51.441298",
          data_updated: "2022-04-25 11:50:32.950996",
          access: "Mekaniker - motor skada",
          area: "Mekaniker",
          description: "Reparation av motor skada",
          eqf: 2,
          language: "SWEDISH",
          name: "SAAB Mekaniker",
          type: "Kvalifikation",
          subQualifications: []
        }
]
const SubQualificationList = [
      {
        id: 1,
        name: "Name 1",
        description: "Description 1",
        data_added: "2022-04-18",
        data_updated: "2022-04-18",
      },
      {
        id: 2,
        name: "name 2",
        description: "description 2",
        data_added: "2022-04-25",
        data_updated: "2022-04-25",
      },
      {
        id: 3,
        name: "name 3",
        description: "description 3",
        data_added: "2022-05-01",
        data_updated: "2022-05-01",
      },
      {
        id: 4,
        name: "name 4",
        description: "description 4",
        data_added: "2022-05-02",
        data_updated: "2022-05-02",
      },
    ]
          
module.exports = { QualificationList, SubQualificationList };