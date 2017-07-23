import React, { Component } from 'react'
import axios from 'axios'

import Output from './Output'
import Select from './Controles/Select'
import Text from './Controles/Text'

class Generador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      par: 0,
      html: false,
      cont: '----'
    }
  }
  /*componentDidMount () {
     this.getSampleText()
   }*/

  getSampleText() {
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.par}&start-with-lorem=1`)
      .then((response) => {
        let devolver = ''
        response.data.map((e) => {
          if (this.state.html) {
            e = `<p>${e}</p>`
          }
          devolver += e + `\n \n`
          return devolver
        })
        this.setState({ cont: devolver }, function () {
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

  render() {
    return (
      <div>
        <h1 className='text-center'>Generado de texto en React JS</h1>
        <hr />
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
        <br />
        <Output value={this.state.cont} />
      </div>
    )
  }

}

export default Generador
