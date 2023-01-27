import React, { Component } from 'react'
import './ClassCompo.css';
import { FaApple, FaArtstation } from "react-icons/fa";


export default class ClassCompo extends Component { 
  
  render() {
    return (
      <div className='classComponent'>
        < FaApple className="re_icon" />
        < FaArtstation className="re_icon" />
        <div>Hello from Class Component</div>
        <div>{ this.props.title }</div>
        <div>{ this.props.des }</div>
      </div>
    )
  }
}
