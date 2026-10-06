'use strict';

const contacts = [
    { name: 'Varvara', phone: '123-456-7890' },
    { name: 'Katerina', phone: '987-654-3210' },
    { name: 'Margo', phone: '555-555-5555' }
];

const findContactByName = (name) => {
    for (const contact of contacts) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return undefined;
};

console.log(findContactByName('Katerina')); 

const phonebook = {
    'Varvara': '123-456-7890',
    'Katerina': '987-654-3210',
    'Margo': '555-555-5555'
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Margo'));