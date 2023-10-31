import React, { Component } from 'react'
import {Button} from "reactstrap"
import Unmount from './unmount'


export default class LifeCucle extends Component {
    constructor(){
        super()
        this.state={
            count:1
        }
    console.log("-----constructor-------")

    } 
    componentDidMount(){
        console.log("-----componentDidMount-------")
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count === this.prevState){
            alert("hello")
        }
        // console.log( prevprops,prevstate)
        console.log("-----componentDidUpdate-------")

    }
  render() {
    console.log("-----Render-------")
    return (
      <>
      <h1>LifeCucle</h1>
      <h1>count is {this.state.count}</h1>
        <Button onClick={()=>this.setState({count:this.state.count+1})}>increment</Button>
        <Button onClick={()=>this.setState({count:this.state.count})}>increment-same</Button>

        {this.state.count < 10 && <Unmount />}
        {/* <Unmount /> */}
   
      </>
    )
  }
}
