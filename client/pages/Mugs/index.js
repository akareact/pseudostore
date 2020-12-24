import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './mugs.css'
import logo from '../../../utils/logo.svg'

class Mugs extends Component {
    state ={
        mugs : [
            {
                name : "",
                image : "",
                link : ""
            }
        ]
    }
    render () {
        return (
            <>
            <div id="header">
                <div id="logo"><img id="logoimg" src={logo}/></div>
                <div id="storeName">
                    HAPPY DESIGN 
                </div>
            </div>
            
            <div id="info"><h2 >"Click on a product to learn more about its size, color and other related options"</h2></div>
            <hr id="break"></hr>
            <div id ="products">
                {this.state.mugs.map((mu) => {
                    return (
                        <a href={mug.link}><div id="product">
                        <div id="prodimg"><img src={mug.image}/></div>
                        <div id="prodtitle"><h3>{mug.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
            </>
        )
    }
}

export default Mugs