import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ContentCopy from 'material-ui/svg-icons/content/content-copy'
import Snackbar from 'material-ui/Snackbar'


const estilos = {
    textarea: {
        width: '100%',
        height: 300
    },
    div: {
        marginTop: 20
    }
}

class Parrafos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props,
            open: false
        }
    }

    copiar(e) {
        document.querySelector('textarea').select()
        document.execCommand('copy')
        this.handleTouchTap()
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        return (
            <div style={estilos.div}>
                <textarea
                    itemID='area'
                    style={estilos.textarea}
                    value={this.props.pars}
                ></textarea>
                <RaisedButton
                    label='Copiar'
                    icon={<ContentCopy />}
                    onTouchTap={this.copiar.bind(this)}
                    disabled={this.props.pars === ''}
                />
                <Snackbar
                    open={this.state.open}
                    message='Párrafos copiados'
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default Parrafos