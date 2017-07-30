import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const estilos = {
  titulo: {
    textAlign: 'center'
  },
  bar: {
    backgroundColor: '#FF6E40'
  }
}

const Logged = props =>
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem
      primaryText='Contact me'
      href='https://twitter.com/yuniors87'
      target="_blank"
    />
    <MenuItem primaryText='Code'
      href='https://github.com/yuniors87/parrafos'
      target="_blank"
    />
  </IconMenu>

Logged.muiName = 'IconMenu'

class Toolbar extends Component {
  render() {
    return (
      <div>
        <AppBar
          title='Generador de párrafos'
          showMenuIconButton={false}
          iconElementRight={<Logged />}
          titleStyle={estilos.titulo}
          style={estilos.bar}
        />
      </div>
    )
  }
}
export default Toolbar
