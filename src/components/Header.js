import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => (
  <div className="header">
  <ul>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/order">Order</Link>
    <Link to="/cats">Kitties!</Link>
  </ul>
  </div>
)

export default Header