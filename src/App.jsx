
import './App.css'

import React from 'react';
import NavBar from './components/NavBar';
import Contenedor from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <Contenedor mensaje=" Aquí se agregarán los productos en el futuro " />
    </div>
  );
}

export default App;

