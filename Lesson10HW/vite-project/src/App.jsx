import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  // Оновлення поля name
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // Додавання нового контакту
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, contacts } = this.state;
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newContact = {
      id: nanoid(),
      name: trimmedName,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: "",
    });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div
        style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}
      >
        <h2>Phonebook</h2>
        {/* Передаємо пропси у форму */}
        <ContactForm
          name={name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h3 style={{ marginTop: "30px" }}>Contacts</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
