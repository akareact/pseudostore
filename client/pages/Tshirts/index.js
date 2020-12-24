import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './tshirts.css'
import logo from '../../../utils/logo.svg'

class Tshirts extends Component {
    state = {
        tshirts : [
            {
                name : "ALWAYS LATE FOR CLASS",
                image : "https://ih1.redbubble.net/image.1480482549.2266/ra,fitted_scoop,x2000,101010:01c5ca27c6,front-c,160,143,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Always-late-for-class-theme-by-akata01/53812266.G2CME?asc=u"
            },
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1480458368.1792/rco,womens_premium_t_shirt,womens,x1770,101010:01c5ca27c6,front-c,170,40,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Lets-minecraft-theme-by-akata01/53811792.EPLQE?asc=u"
            },
            {
                name : "SLEEPING ALL DAY AWAKE ALL NIGHT",
                image : "https://ih1.redbubble.net/image.1483397351.0136/ssrco,chiffon_top,womens,black,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
                link : "https://www.redbubble.com/i/top/Sleep-all-day-awake-all-night-theme-by-akata01/53810136.B7P0O?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1477492598.3873/ra,fitted_scoop,x2000,101010:01c5ca27c6,front-c,160,143,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Good-vibes-trendy-black-and-white-by-akata01/53643873.G2CME?asc=u"
            },
            {
                name : "SIMP",
                image : "https://ih1.redbubble.net/image.1472700974.2515/rco,womens_premium_t_shirt,womens,x1770,101010:01c5ca27c6,front-c,170,40,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/SIMP-MEME-TREND-by-akata01/53652515.EPLQE?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1472690197.4824/ssrco,chiffon_top,womens,black,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
                link : "https://www.redbubble.com/i/top/To-fart-is-an-art-pun-intended-by-akata01/53654824.B7P0O?asc=u"
            },
            {
                name : "POSSESSIVE ABOUT MY CHAPSTICK",
                image : "https://ih1.redbubble.net/image.1477581015.3726/ra,fitted_scoop,x2000,101010:01c5ca27c6,front-c,160,143,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Possessive-about-my-chapstick-by-akata01/53753726.G2CME?asc=u"
            },
            {
                name : "SLEEPOVER",
                image : "https://ih1.redbubble.net/image.1478397244.0161/rco,womens_premium_t_shirt,womens,x1770,101010:01c5ca27c6,front-c,170,40,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Sleepover-theme-by-akata01/53770161.EPLQE?asc=u"
            },
            {
                name : "DATE ME",
                image : "https://ih1.redbubble.net/image.1483702773.9253/ssrco,chiffon_top,womens,black,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
                link : "https://www.redbubble.com/i/top/Dating-theme-date-me-for-singles-by-akata01/53799253.B7P0O?asc=u"
            },
            {
                name : "POLAR BEER",
                image : "https://ih1.redbubble.net/image.1479872892.9983/ssrco,racerback,womens,101010:01c5ca27c6,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
                link : "https://www.redbubble.com/i/tank-top/Funny-cold-beer-theme-by-akata01/53799983.IXNXQ?asc=u"
            },
            {
                name : "NETFLIX AND CHILL",
                image : "https://ih1.redbubble.net/image.1479902156.0580/rco,womens_premium_t_shirt,womens,x1770,101010:01c5ca27c6,front-c,170,40,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Netflix-and-chill-then-pill-theme-by-akata01/53800580.EPLQE?asc=u"
            },
            {
                name : "TOO MUCH MAKEUP?",
                image : "https://ih1.redbubble.net/image.1480008589.2744/ra,fitted_scoop,x2000,101010:01c5ca27c6,front-c,160,143,1000,1000-bg,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/t-shirt/Is-my-makeup-too-much-theme-by-akata01/53802744.G2CME?asc=u"
            },
            {
                name : "CHILL PILL",
                image : "https://ih1.redbubble.net/image.1480203627.6673/ssrco,racerback,womens,101010:01c5ca27c6,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
                link : "https://www.redbubble.com/i/tank-top/Where-can-i-get-a-chill-pill-funny-theme-by-akata01/53806673.IXNXQ?asc=u"
            }
        ]
    }
    render () {
        return (
            <><div id="header">
            <div id="logo"><img id="logoimg" src={logo}/></div>
            <div id="storeName">
                HAPPY DESIGN 
            </div>
        </div>
        
        <div id="info"><h2 >"Click on a product to learn more about its size, color and other related options"</h2></div>
        <hr id="break"></hr>
        <div id ="products">
                {this.state.tshirts.map((tee) => {
                    return (
                        <a href={tee.link}><div id="product">
                        <div id="prodimg"><img src={tee.image}/></div>
                        <div id="prodtitle"><h3>{tee.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
        </>
        
        )
    }
}

export default Tshirts