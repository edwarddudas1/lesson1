import React from "react";

const ContactForm = ({ name, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit" style={{ marginLeft: "10px" }}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
