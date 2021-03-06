const contacts = require('../db/contacts.json')

const getContactById = async (contactId) => {
  const contact = await contacts.find((person) => person.id === contactId)
  if (!contact) {
    return null
  }
  return contact
}

module.exports = getContactById

//==============old version ===================================
// const fs = require('fs')
// const path = require('path')
// const contactsPath = path.join(__dirname, 'db', 'contacts.json')
//
//
// const getContactById = async (contactId) => {
//   await fs.readFile(contactsPath, 'utf-8', (error, data) => {
//     if (error) {
//       throw new Error('Cannot read file')
//     }

//     const contacts = JSON.parse(data)
//     const contact = contacts.find((person) => person.id === contactId)
//     if (!contact) {
//       return null
//     }
//     return contact
//   })
// }
//==================================
