import React, { Component } from 'react'
import './App.css'

import Generador from './Componentes/Generador'
import Tab from './Componentes/Controles/Tab'
import Menu from './Componentes/Menu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render () {
    return (
      <div className='App'>
        <Menu/>
        <div className='contenido'>
          <Generador/>
          <hr/>
          <Tab/>
        </div>
      </div>
    )
  }
}

export default App
