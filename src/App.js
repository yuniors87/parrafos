import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import Output from './Componentes/Output'
import Select from './Componentes/Controles/Select'
import Text from './Componentes/Controles/Text'
import Tab from './Componentes/Controles/Tab'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            par: 4,
            html: false,
            text: ''
        }
    }

    componentWillMount() {
        this.getSampleText()
    }

    getSampleText() {
        axios.get('http://hipsterjesus.com/api?paras=' + this.state.par + '&html=' + this.state.html)
            .then((response) => {
                this.setState({ text: response.data.text }, function() {
                    // console.log(this.state)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    showHtml(e) {
        this.setState({ html: e }, this.getSampleText)
    }

    showPar(e) {
        this.setState({ par: e }, this.getSampleText)
    }

<<<<<<< HEAD
  render () {
    return (
      <div className='App'>
        <h1 className='text-center'>Generado de texto en React JS</h1>
        <hr/>
        <form className='form-inline'>
          <div className='form-group'>
            <label>
              Párrafos:
            </label>
            <Text value={this.state.par} onChange={this.showPar.bind(this)} />
          </div>
          <div className='form-group'>
            <label>
              Incluir HTML:
            </label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
        </form>
        <br/>
        <Output value={this.state.text} />
        <Tab />
      </div>
    )
  }
=======
    render() {
        return ( <
            div className = 'App' >
            <
            h1 className = 'text-center' > Generado de texto en React JS < /h1> <
            hr / >
            <
            form className = 'form-inline' >
            <
            div className = 'form-group' >
            <
            label >
            Párrafos:
            <
            /label> <
            Text value = { this.state.par }
            onChange = { this.showPar.bind(this) }
            /> < /
            div > <
            div className = 'form-group' >
            <
            label >
            Incluir HTML:
            <
            /label> <
            Select value = { this.state.html }
            onChange = { this.showHtml.bind(this) }
            /> < /
            div > <
            /form> <
            br / >
            <
            Output value = { this.state.text }
            /> < /
            div >
        )
    }
>>>>>>> 3a7dc4682197d6b94ee4d88fc631a3add8c0a837
}

export default App