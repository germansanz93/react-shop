import React, { Component } from 'react'

/**
 * Creamos esta clase layout para centrar el contenido y definirle un ancho
 * Lo hacemos con un div dentro de otro div porque necesitamos poder decirle al div
 * interior que queremos un ancho de 1200px en este caso y debemos decirle al div
 * exterior que centre ese div de 1200px horizontalmente. 
 */

const styles = {
  layout: {
    backgroundColor: "#FFF",
    color: "#0A283E",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    with: "1200px"
  }
}

export class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout