import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toolbar from './Componentes/Toolbar'
import Tarjeta from './Componentes/Tarjeta'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Contacto from './Componentes/Contacto'
injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Toolbar />
          <Tarjeta />
          <Contacto />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
