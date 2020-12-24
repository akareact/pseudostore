import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './stationery.css'
import logo from '../../../utils/logo.svg'

class Stationery extends Component {
    state ={
        Stationery : [
            {
                name : "ALWAYS LATE FOR CLASS",
                image : "https://ih1.redbubble.net/image.1483361854.2266/sn,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/notebook/Always-late-for-class-theme-by-akata01/53812266.WX3NH?asc=u"
            },
            {
                name : "MATHS IS MEAN",
                image : "https://ih1.redbubble.net/image.1483407442.9763/sn,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/notebook/Maths-is-mean-theme-by-akata01/53809763.WX3NH?asc=u"
            },
            {
                name : "I NEVER COPY MY HOMEWORK",
                image : "https://ih1.redbubble.net/image.1483421456.9495/sn,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/notebook/I-never-copy-my-homework-except-maths-theme-by-akata01/53809495.WX3NH?asc=u"
            },
            {
                name : "STUDY",
                image : "https://ih1.redbubble.net/image.1480050440.3591/sn,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/notebook/Stud-theme-by-akata01/53803591.WX3NH?asc=u"
            },
            {
                name : "DATE ME",
                image : "https://ih1.redbubble.net/image.1483702712.9253/sn,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/notebook/Dating-theme-date-me-for-singles-by-akata01/53799253.WX3NH?asc=u"
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
                {this.state.Stationery.map((st) => {
                    return (
                        <a href={st.link}><div id="product">
                        <div id="prodimg"><img src={st.image}/></div>
                        <div id="prodtitle"><h3>{st.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
            </>
        )
    }
}

export default Stationery