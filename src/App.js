import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header';
import SpellList from './components/SpellList';
import SavedSpells from './components/SavedSpells';
import SpellCardDetails from './components/SpellCardDetails';

function App() {
  return (
    <div>
      <Header />

      <Route exact path='/spells' component={SpellList} />
      <Route path='/spell-sheet' component={SavedSpells} />
      <Route path='/:spellIndex' component={SpellCardDetails} />
    </div>
  );
}

export default App;
