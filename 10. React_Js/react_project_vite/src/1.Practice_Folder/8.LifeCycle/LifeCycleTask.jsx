import React, { Component } from 'react'
import {Button} from "reactstrap"


export default class LifeCycleTask extends Component {
    constructor(){
        super()
        this.state={
            count:1,
        }
    }
    prevstate=10
    componentDidUpdate(prevprops,prevstate){
          
        if(this.state.count === this.prevstate){
            alert(`You reached ${this.state.prevstate }`)
        }
        console.log(prevprops,prevstate)
    }
  render() {
    return (
        <div className='d-flex justify-content-center pt-4'>
          <div>
        LifeCycleTask
        <h1>count is {this.state.count}</h1>

        <Button color="danger" onClick={()=>this.setState({count:this.state.count+1})}>click Me</Button>
        </div>
        </div>
    )
  }
}