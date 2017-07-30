import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

const estilos = {
    papel: {
        margin: '20px 3%',
        padding: 20,
        textAlign: 'center'
    }, link: {
        textDecoration: 'none'
    }
}

class Contacto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props
        }
    }

    render() {
        return (
            <Paper style={estilos.papel} zDepth={3} >
                <span>Code on <a style={estilos.link} href='https://github.com/yuniors87/parrafos' target='_blank'>GitHub</a></span>
            </Paper>
        )
    }
}

export default Contacto