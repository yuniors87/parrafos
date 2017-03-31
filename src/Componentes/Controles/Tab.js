import React, { Component } from 'react'
var Alert = require('react-bootstrap/lib/Alert')

class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render () {
    return (
      <Alert bsStyle='warning'>
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    )
  }
}

export default Tab
