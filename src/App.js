import React from 'react'
import GlobalStyles from './assets/styles/GlobalStyles'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

//Redux
import { Provider } from 'react-redux';
import Store from './store';

//Commons
import Header from './commons/Header'

//Screens
import Home from './screens/Home'
import Formulario from './screens/Formulario'
import Redux from './screens/Redux'

const App = () => (
    <Provider store={Store}>

      <Router>

        <GlobalStyles />

        <Header />

        <Switch>

          <Route path="/redux">
            <Redux />
          </Route>

          <Route path="/formulario">
            <Formulario />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>

    </Provider>

)

export default App
