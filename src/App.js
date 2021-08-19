import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
// import initialContacts from './components/ContactList/contacts.json';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? []
  });
    
  const [filter, setFilter] = useState('');

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const formSubmitHandler = ({ name, number}) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    }

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())){
      return alert(`${contact.name} is already exist!`);
    } else {  
      setContacts((contacts) => [contact, ...contacts]);
    }
  };

  const changeFilter = (event) => {
    setFilter(() => event.currentTarget.value);
  }; 
  
  
  useEffect(() =>{ 
    localStorage.setItem('contacts', JSON.stringify(contacts));  
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div>          
    <h1>Phonebook</h1>
      <ContactForm 
        onSubmit = {formSubmitHandler}
      />

    <h2>Contacts</h2> 
      <Filter 
        value={filter} 
        onChange = {changeFilter}
      />
      
      <ContactList 
        contacts = {visibleContacts} 
        onDeleteContact = {deleteContact}
      /> 
    </div>
  )
}

