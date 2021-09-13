const contacts = require('./contacts.js')

// console.table(contacts.listContacts())
// console.table(contacts.getContactById(6))
// console.table(contacts.removeContact(5))
// console.table(contacts.addContact('Alex', 'alex@mail.com', '123-456-789'))

const argv = require('yargs').argv

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts()
      break

    case 'get':
      contacts.getContactById(id)
      break

    case 'add':
      contacts.addContact(name, email, phone)
      break

    case 'remove':
      contacts.removeContact(id)
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
