import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header';
import SpellList from './components/SpellList';
import SavedSpells from './components/SavedSpells';
import SpellCardDetails from './components/SpellCardDetails';

import { AppStyled } from './styling/appStyle'

function App() {
  return (
    <AppStyled>
      <Header />

      <Route exact path='/spells' component={SpellList} />
      <Route path='/spell-sheet' component={SavedSpells} />
      <Route path='/spells/:spellIndex' component={SpellCardDetails} />
    </AppStyled>
  );
}

export default App;
