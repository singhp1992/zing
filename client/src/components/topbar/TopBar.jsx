import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/products'
import { Link } from 'react-router-dom'
 

export default class TopBar extends PureComponent {
    render() { return (
        <header className = "App-header" >
        <h1 className="App-title">ZING</h1>
        <div id="navbar">
            <table> 
                <thead>
                    <tc>Home</tc>
                    <tc>Products</tc>
                    <tc>About Us</tc>
                    <tc>Login</tc>
                </thead> 
            </table> 
        </div>
        <p> website in progress :)</p>
        </header>
    )
    }
}