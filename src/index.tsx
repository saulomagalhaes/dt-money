import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api'; // Captar todas chamadas com /api
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de WebSite',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
