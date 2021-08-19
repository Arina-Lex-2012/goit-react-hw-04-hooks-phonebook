import React from 'react';
import PropTypes from "prop-types";
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactListItem 
                    key = {contact.id}
                    name = {contact.name}
                    number = {contact.number}
                    onDeleteContact = {() => onDeleteContact(contact.id)}
                />  
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;