import React, { Component } from 'react'
import axios from 'axios'

import Output from './Output'
import Select from './Controles/Select'
import Text from './Controles/Text'

class Generador extends Component {
  constructor (props) {
    super(props)
    this.state = {
      par: 4,
      html: false,
      text: ''
    }
  }
  componentWillMount () {
    this.getSampleText()
  }

  getSampleText () {
    axios.get('http://hipsterjesus.com/api?paras=' + this.state.par + '&html=' + this.state.html)
      .then((response) => {
        this.setState({ text: response.data.text }, function () {
          // console.log(this.state)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  showHtml (e) {
    this.setState({ html: e }, this.getSampleText)
  }

  showPar (e) {
    this.setState({ par: e }, this.getSampleText)
  }

  render () {
    return (
      <div>
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
      </div>
    )
  }

}

export default Generador
