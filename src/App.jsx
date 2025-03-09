import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const localStorageKAY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() =>{
    const sevedContact = localStorage.getItem('contacts');
    
    return sevedContact ? JSON.parse(sevedContact) : initContacts
  });
  
  const [searchName, setSearchName] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  
  );
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (contactId) =>
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

 

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchName={searchName} setSearchName={setSearchName} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
