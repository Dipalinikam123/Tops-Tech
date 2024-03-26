import React, { Component } from 'react'

export default class UseStateClass extends Component {
    constructor(){
        super()
        this.state={
            count:10,
        }
    }

    increment(){
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <>
    <h1>count is {this.state.count} </h1>

    <button onClick={()=>this.increment()}>incre</button>

      </>
    )
  }
}
