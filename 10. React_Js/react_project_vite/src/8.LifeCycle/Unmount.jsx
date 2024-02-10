import React, { Component } from "react";

export default class Unmount extends Component {
  componentWillUnmount() {
    console.log("----componentWillUnmount----");
    alert("really you want to remove unmount ");
  }
  render() {
    return <h1>Unmount</h1>;
  }
}