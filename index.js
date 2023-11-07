import * as contactsService from "./contacts.js";
import yargs from "yargs";
const { argv } = yargs(process.argv.slice(2));

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.table(oneContact);

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.table(newContact);

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      return console.table(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
