import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header';
import SpellList from './components/SpellList';
import SavedSpells from './components/SavedSpells';

function App() {
  return (
    <div>
      <Header />

      <Route exact path='/' component={SpellList} />
      <Route path='/spell-sheet' component={SavedSpells} />
    </div>
  );
}

export default App;
