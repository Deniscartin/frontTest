import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    // Sostituisci 'http://api.example.com' con il dominio fisso del tuo backend
    const apiUrl = 'https://backtest-kedzwrpd.daucu.site/api/customers';

    fetch(apiUrl)
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)))
      .catch(error => console.error('Error fetching customers:', error));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
