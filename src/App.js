import React, { Component } from 'react'

import SideLayout from "./components/sidelayout/sidelayout"
export default class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{color:'#1A4571',fontFamily:"Acme,sans-serif",textAlign:"center",fontSize:'35px'}}>Chatoozz</h3>
        <SideLayout />
      </div>
    )
  }
}
