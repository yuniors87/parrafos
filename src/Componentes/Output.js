import React, { Component } from 'react'

class Output extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  copiar (e) {
    let contenido = this.props.value
    console.log(contenido + ' de var')
    this.setState({value: contenido})
    console.log(this.state.value + ' de est')
    // document.querySelector('input').select()
    // document.execCommand('copy')

  }

  render () {
    return (
      <div classID='salida' className='well output'>
        <p onClick={this.copiar.bind(this)}>
          {this.props.value}
        </p>
      </div>
    )
  }
}

export default Output
