import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import Parrafos from './Parrafos'
import axios from 'axios'
import ActionCached from 'material-ui/svg-icons/action/cached'

const estilos = {
    display: 'inline-block',
    papel: {
        margin: '20px 3%',
        padding: 20,
        align: 'center'
    },
    togle: {
        width: 200
    }
}

class Tarjeta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            html: false,
            valido: true,
            resultado: ''
        }
    }

    textoCambiado(e) {
        this.setState({ valido: this.esNumero(e.target.value) })
        this.setState({ value: e.target.value })
    }

    togleCambiado(e, cambiado) {
        this.setState({ html: cambiado })
    }

    generar() {
        if (this.esNumero(this.state.value)) {
            this.setState({ valido: true }, this.getSampleText())
        }
        else {
            this.setState({ valido: false })
        }
    }

    getSampleText() {
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.value}&start-with-lorem=1`)
            .then((response) => {
                let devolver = ''
                response.data.map((e) => {
                    if (this.state.html) {
                        e = `<p>${e}</p>`
                    }
                    return devolver += e + `\n \n`
                })
                this.setState({ resultado: devolver }, function () {
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    esNumero(e) {
        return e.match(/^[0-9]+$/)
    }

    render() {
        return (
            <Paper style={estilos.papel} zDepth={3} >
                <TextField
                    floatingLabelText='Cantidad de párrafos'
                    errorText={this.state.valido ? '' : 'Sólo puede ingresar números enteros'}
                    onChange={this.textoCambiado.bind(this)}
                    value={this.state.value}
                />
                <Toggle
                    label='Incluir HTML?'
                    defaultToggled={false}
                    style={estilos.togle}
                    onToggle={this.togleCambiado.bind(this)}
                />
                <br />
                <RaisedButton
                    label='Generar'
                    primary={true}
                    disabled={!this.state.valido}
                    icon={<ActionCached />}
                    onTouchTap={this.generar.bind(this)}
                />
                <Parrafos pars={this.state.resultado} />
            </Paper>
        )
    }
}


export default Tarjeta