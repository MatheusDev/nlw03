import React from 'react'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMaps'

function Routes() {
  return (
    <BrowserRouter>
      {/* O Switch faz com q a rota seja chamada apenas uma vez */}
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes