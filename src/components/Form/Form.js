import React from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAdd = e => {
    e.preventDefault();
    this.props.onSubmitProp(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handleAdd}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name:
          <input
            className={css.input}
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="name"
            required
          />
        </label>

        <label className={css.label} htmlFor={this.numberInputId}>
          Tel:
          <input
            className={css.input}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          ></input>
        </label>
        <button className={css.submit_button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

Form.propTypes = { onSubmitProp: PropTypes.func.isRequired };

export default Form;
