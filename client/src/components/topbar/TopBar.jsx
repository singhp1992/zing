import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import { getProducts } from '../../actions/products'
//import { Link } from 'react-router-dom'
 

export default class TopBar extends PureComponent {
    render() { return (
        <header className = "App-header" >
        <h1 className="App-title">ZING</h1>
            <div class="buttons">
                <p><a href="#">Home</a></p>
                <p><a href="#">Products</a></p>
                <p><a href="#">About Us</a></p>
                <p><a href="#">Login</a></p>
            </div>
        </header>
    )
    }
}