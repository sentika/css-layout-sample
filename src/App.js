import React from 'react';
import './App.scss';
import { Nav } from './components/Nav';
import { Main } from './components/Main';

function App(props) {
  return (
    <div className="general">
      <Nav user={props.user} />
      <Main />
    </div>
  );
}

export default App;
