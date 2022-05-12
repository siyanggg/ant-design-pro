import React from 'react';
import Form from './Form';
import Table from './Table';

class Indemnity extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      items: [],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const items = [...this.state.items];

    items.push({ name: this.state.name, address: this.state.address });

    this.setState({
      items,
      name: '',
      address: '',
    });
  };

  handleInputChange = (e) => {
    const input = e.target;
    const name = e.target.name;
    const value = input.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newname={this.state.name}
          newaddress={this.state.address}
        />
        <Table items={this.state.items} />
      </div>
    );
  }
}

export default Indemnity;
