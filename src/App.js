import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

import React from 'react'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 400, img: '/productos/tomate.jpg' },
      { name: 'Arvejas', price: 200, img: '/productos/arvejas.jpg' },
      { name: 'Lechuga', price: 300, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  }

//Defino este metodo como una arrow function para evitarme el problema
//del cambio de contexto de this que vimos en videos anteriores
agregarAlCarro = (producto) => {
  const { carro } = this.state;
  if(carro.find(x => x.name === producto.name)){
    const newCarro = carro.map(x => x.name === producto.name ?
    ({...x, qty: x.qty + 1}):
    x)
    return this.setState({
      carro: newCarro
    })
  }
  return this.setState({
    carro: this.state.carro.concat({...producto, qty: 1})
  })
}

mostrarCarro = () => {
  if(!this.state.carro.length) return
  this.setState({esCarroVisible: !this.state.esCarroVisible})
}

  render() {
    const {esCarroVisible} = this.state;
    return (
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
