import React, { Component } from 'react'
import './Calculadora.css'
import Button from '../components/Button'
import Tela from '../components/Tela'

const stateInicial = {
    valorTela: '0',
    limparTela: false,
    operacao: null,
    valores: [0,0],
    valorCorrent: 0
}

export default class Calculadora extends Component {

    state = { ...stateInicial }

    constructor(props) {
        super(props)
        this.limpar = this.limpar.bind(this)
        this.operacaoSelecionada = this.operacaoSelecionada.bind(this)
        this.incluirDigito = this.incluirDigito.bind(this)
    }

    limpar(){
        this.setState({ ...stateInicial })
    }

    operacaoSelecionada(tipo) {
        if(this.state.valorCorrent === 0){
            this.setState({
                tipo,
                limparTela: true,
                valorCorrent: 1
        })
      } else{
          const iconIgual = tipo === '='
            const operacaoAnterior = this.state.tipo

        // Realizando o calculo
          const valores = [...this.state.valores]

          try {
              valores[0] = eval(` ${valores[0]} ${operacaoAnterior} ${valores[1]} `)
          } catch (error) {
              valores[0] = this.state.valores[0]
          }

          valores[1] = 0
          this.setState({ 
              valorTela: valores[0],
              operacao: iconIgual ? null : tipo,
              valorCorrent: iconIgual ? 0: 1,
              limparTela: !iconIgual,
              valores
             })
      }
    }

    incluirDigito(numero) {
        // Não permitir números com mais de um .
        if (numero === '.' && this.state.valorTela.includes('.')){
            return
        }

        const limparTela = this.state.valorTela === '0' || this.state.limparTela
        const valorCorrent = limparTela ? '' : this.state.valorTela
        const valorTela = valorCorrent + numero
        this.setState({ valorTela, limparTela: false })

        if(numero !== '.'){
            const index = this.state.valorCorrent
            const novoValor = parseFloat(valorTela)
            const valores = [...this.state.valores]
            valores[index] = novoValor
            this.setState({ valores })
        }

    }
    render() {
          return (

            <div className="calculadora">

                <Tela value={this.state.valorTela}/>

                  <Button label="AC" triple click={this.limpar} />
                  <Button label="/" operacoes click={this.operacaoSelecionada} />

                  <Button label="7" click={this.incluirDigito} />
                  <Button label="8" click={this.incluirDigito} />
                  <Button label="9" click={this.incluirDigito} />
                  <Button label="*" operacoes click={this.operacaoSelecionada} />
                
                  <Button label="4" click={this.incluirDigito} />
                  <Button label="5" click={this.incluirDigito} />
                  <Button label="6" click={this.incluirDigito} />
                  <Button label="-" operacoes click={this.operacaoSelecionada} />
                
                  <Button label="1" click={this.incluirDigito} />
                  <Button label="2" click={this.incluirDigito} />
                  <Button label="3" click={this.incluirDigito} />
                  <Button label="+" operacoes click={this.operacaoSelecionada}/>
                
                  <Button label="0" double click={this.incluirDigito} />
                  <Button label="." click={this.incluirDigito}/>
                  <Button label="=" operacoes click={this.operacaoSelecionada}/>
            </div>
        )
    }
}