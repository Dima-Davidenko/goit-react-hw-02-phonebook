import React, { Component } from 'react';
import { Section, Filter, Contacts, NewContactForm } from './';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import phonebook from '../data/phonebook.json';
import { nanoid } from 'nanoid';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export class App extends Component {
  state = {
    contacts: [...phonebook],
    filteredContacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };

  filterContacts = filter => {
    const { contacts } = this.state;
    this.setState({
      filteredContacts: contacts.filter(({ name }) => name.toLowerCase().includes(filter)),
      filter,
    });
  };

  removeContact = idToRemove => {
    this.setState(({ contacts, filteredContacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToRemove),
      filteredContacts: filteredContacts.filter(({ id }) => id !== idToRemove),
    }));
  };
  render() {
    const { contacts, filteredContacts, filter } = this.state;
    return (
      <Container>
        <Typography variant="h2" sx={{ mb: 10 }}>
          Телефонна книжка
        </Typography>
        <Section title="Додати новий контакт" variant="h3">
          <NewContactForm addContact={this.addContact} />
        </Section>
        <Section title="Ваші контакти" variant="h3">
          <Contacts
            contactsToShow={filteredContacts.length || filter ? filteredContacts : contacts}
            removeContact={this.removeContact}
          >
            <Filter filterContacts={this.filterContacts} />
          </Contacts>
        </Section>
      </Container>
    );
  }
}

export default App;
