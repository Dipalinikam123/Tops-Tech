import React, { Component } from 'react'

export default class PropsClassCom extends Component {
  render() {
    // console.log(this .props)
    return (
      <div>
        <h1>Name is {this?.props?.data?.name}</h1>
        <h1>age is {this?.props?.data?.age}</h1>
        <h1>data {this?.props?.data}</h1>
      </div>
    )
  }
}
