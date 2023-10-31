import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        alert("remove")
    }
  render() {
    return (
    <>
      <h1>
      unmount
      </h1>
    </>
    )
  }
}
