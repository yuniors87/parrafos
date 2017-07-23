import React, { Component } from 'react'

class Output extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  copiar(e) {

  }


  render() {
    return (
      <div classID='salida' className='well output' data-toggle="tooltip" title="Click to copy"
        onClick={this.copiar.bind(this)} >
        <p className='prs'>
          {this.props.value.split('\n').map((item, key) => {
            return <span key={key}>{item}<br /></span>
          })}
        </p >
      </div>
    )
  }
}

export default Output
