import ContactForm from "./assets/components/ContactForm/ContactForm";
import SearchBox from "./assets/components/SearchBox/SearchBox";
// import Contact from "./assets/components/Contact/Contact";
import ContactList from "./assets/components/ContactList/ContactList";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(" ");

  const [contacts, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      contact.number.includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox handleChange={handleChange} imputValue={inputValue} />
        <ContactList contacts={visibleContacts} />
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;
