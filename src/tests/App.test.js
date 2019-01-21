import React from 'react';
import ReactDOM from 'react-dom';
// Fix import pathname
import App from '../containers/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
