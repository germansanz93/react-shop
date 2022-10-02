import React, { Component } from 'react'

const styles = {
  detallesCarro: {
    backgroundColor: '#FFF',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgba(0,0,0,0.1)',
    borderRadius: 5,
    width: 300,
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #AAA'
  }
}

export class DetallesCarro extends Component {
  render() {
    const { carro } = this.props
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map(prod =>
            <li style={styles.producto} key={prod.name}>
              <img alt={prod.name} src={prod.img} width='50' height='32'/>
              {prod.name} <span>{prod.qty}</span> 
            </li>)}
        </ul>
      </div>
    )
  }
}

export default DetallesCarro