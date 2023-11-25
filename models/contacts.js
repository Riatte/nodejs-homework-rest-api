const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await listContacts();
    const contact = data.find(({ id }) => id === contactId);
    return contact || "null";
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await listContacts();
    const contact = data.findIndex(({ id }) => id === contactId);
    if (contact) {
      const [removedContact] = data.splice(contact, 1);
      await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
      return removedContact;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const data = await listContacts();
    const newContact = {
      id: nanoid(),
      ...body,
    };
    data.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const data = await listContacts();
    const index = data.findIndex((item) => item.id === contactId);

    if (index === -1) {
      return null;
    }
    data[index] = { contactId, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return data[index];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
