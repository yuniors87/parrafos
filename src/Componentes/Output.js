import React, { Component } from 'react'

class Output extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  copiar () {
    document.querySelector('input').select()
    document.execCommand('copy')
  }

  render () {
    return (
      <div classID='salida' className='well output' onClick={this.copiar.bind(this)}>
        <p>
          {this.props.value}
        </p>
      </div>
    )
  }
}

export default Output
