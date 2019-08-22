import React, { Component } from 'react'
import './Calculadora.css'
import Button from '../components/Button'
import Tela from '../components/Tela'

export default class Calculadora extends Component {

    constructor(props) {
        super(props)
        this.limpar = this.limpar.bind(this)
        this.operacao = this.operacao.bind(this)
        this.incluirDigito = this.incluirDigito.bind(this)
    }

    limpar(){
        console.log('limpar')
    }

    operacao(operacoes) {
        console.log('operacoes')
    }

    incluirDigito(numero) {
        console.log(numero)
    }
    render() {
          return (
            <div className="calculadora">

                <Tela value={0}/>

                <Button label="C" click={this.limpar}/>
                <Button label="<=" />
                <Button label="%" />
                <Button label="/" operacoes click={this.operacao} />

                  <Button label="7" click={this.incluirDigito} />
                  <Button label="8" click={this.incluirDigito} />
                  <Button label="9" click={this.incluirDigito} />
                  <Button label="x" operacoes />
                
                  <Button label="4" click={this.incluirDigito} />
                  <Button label="5" click={this.incluirDigito} />
                  <Button label="6" click={this.incluirDigito} />
                  <Button label="-" operacoes />
                
                  <Button label="1" click={this.incluirDigito} />
                  <Button label="2" click={this.incluirDigito} />
                  <Button label="3" click={this.incluirDigito} />
                  <Button label="+" operacoes />
                
                  <Button label="0" double click={this.incluirDigito} />
                  <Button label="." click={this.incluirDigito}/>
                  <Button label="=" operacoes/>
            </div>
        )
    }
}