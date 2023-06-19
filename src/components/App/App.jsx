import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filer: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const nameLowerCase = name.toLowerCase();
  };

  deleteContact = () => {
    console.log('DELETE');
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <Form onSubmitProp={this.formSubmitHandler} />
        <h2>Contacts:</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
