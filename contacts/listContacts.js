const contacts = require('../db/contacts.json')

const listContacts = async () => contacts

module.exports = listContacts

// ======================= hard version=======================
// const fs = require('fs')
// const path = require('path')
// const contactsPath = path.join(__dirname, 'db', 'contacts.json')
//
//
// const listContacts = async () => {
//   await fs.readFile(contactsPath, 'utf-8', (error, data) => {
//     if (error) {
//       throw new Error('Cannot read file')
//     }
//     const contacts = JSON.parse(data)
//     return contacts
//     // console.table(contacts)
//   })
// }======================================
