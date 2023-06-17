import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              value={this.state.name}
              onChange={this.handleName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="name"
              required
            />
          </label>
          <label>
            Tel:
            <input type="tel"></input>
          </label>
          <button>Add Contact</button>
        </form>
        <div></div>
      </div>
    );
  }
}

export default App;
