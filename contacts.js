const fs = require('fs')
const path = require('path')
const { v4 } = require('uuid')

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

function listContacts() {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot read file')
    }
    const contacts = JSON.parse(data)
    console.table(contacts)
  })
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot read file')
    }

    const contacts = JSON.parse(data)
    const contact = contacts.find((person) => person.id === contactId)
    if (!contact) {
      return null
    }
    console.table(contact)
  })
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot read file')
    }
    const contacts = JSON.parse(data)
    const contact = contacts.findIndex((person) => person.id === contactId)
    // const contact = contacts.filter((person) => person.id !== contactId)
    if (contact === -1) {
      return null
    }
    contacts.splice(contact, 1)
    console.table(contacts)
    fs.writeFile(contactsPath, JSON.stringify(contacts))
  })
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot read file')
    }
    const contacts = JSON.parse(data)
    const newContact = { id: v4(), name, email, phone }
    contacts.push(newContact)

    console.log('New contact is added:')
    console.table(contacts)

    fs.writeFile(contactsPath, JSON.stringify(newContact))
  })
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}