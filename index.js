const contactsOperations = require('./contacts')

const argv = require('yargs').argv

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':
        const data = await contactsOperations.listContacts()
        console.table(data)
        break

      case 'get':
        const contactById = await contactsOperations.getContactById(id)
        console.table(contactById)
        break

      case 'add':
        const addedContact = await contactsOperations.addContact(
          name,
          email,
          phone,
        )
        console.table(addedContact)
        break

      case 'remove':
        const removedContact = await contactsOperations.removeContact(id)
        console.table(removedContact)
        break

      default:
        console.warn('\x1B[31m Unknown action type!')
    }
  } catch (error) {
    console.log(error)
  }
}

invokeAction(argv)

// const contacts = require('./contacts.js')

// ===================================== 1-st variant without separate files with functions
// const argv = require('yargs').argv

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       contacts.listContacts()
//       break

//     case 'get':
//       contacts.getContactById(id)
//       break

//     case 'add':
//       contacts.addContact(name, email, phone)
//       break

//     case 'remove':
//       contacts.removeContact(id)
//       break

//     default:
//       console.warn('\x1B[31m Unknown action type!')
//   }
// }

// invokeAction(argv)
//===========================================================
