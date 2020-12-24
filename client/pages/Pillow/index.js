import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './pillow.css'
import logo from '../../../utils/logo.svg'

class Pillow extends Component {
    state ={
        pillows : [
            {
                name : "SLEEPY AF",
                image : "https://ih1.redbubble.net/image.1480563229.3355/throwpillow,small,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/throw-pillow/Sleepy-af-by-akata01/53813355.5X2YF?asc=u"
            },
            {
                name :"LAZY AF",
                image : "https://ih1.redbubble.net/image.1483306293.3069/throwpillow,small,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/throw-pillow/Lazy-af-by-akata01/53813069.5X2YF?asc=u"
            },
            {
                name : "DREAMY AF",
                image : "https://ih1.redbubble.net/image.1483334542.2833/throwpillow,small,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/throw-pillow/Dreamy-af-theme-by-akata01/53812833.5X2YF?asc=u"
            },
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1483370811.1792/throwpillow,36x36,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/floor-pillow/Lets-minecraft-theme-by-akata01/53811792.TMTL5?asc=u"
            },
            {
                name : "SLEEPING ALL DAY AWAKE ALL NIGHT",
                image : "https://ih1.redbubble.net/image.1480375626.0136/throwpillow,36x36,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/floor-pillow/Sleep-all-day-awake-all-night-theme-by-akata01/53810136.TMTL5?asc=u"
            },
            {
                name : "NETFLIX AND CHILL",
                image : "https://ih1.redbubble.net/image.1483483649.0580/throwpillow,36x36,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/floor-pillow/Netflix-and-chill-then-pill-theme-by-akata01/53800580.TMTL5?asc=u"
            },{
                name : "SLEEPOVER",
                image : "https://ih1.redbubble.net/image.1962148163.0161/throwpillow,small,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/throw-pillow/Sleepover-theme-by-akata01/53770161.5X2YF?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1483740997.4824/throwpillow,36x36,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/floor-pillow/To-fart-is-an-art-pun-intended-by-akata01/53654824.TMTL5?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1477492622.3873/throwpillow,36x36,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg",
                link : "https://www.redbubble.com/i/floor-pillow/Good-vibes-trendy-black-and-white-by-akata01/53643873.TMTL5?asc=u"
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
                {this.state.pillows.map((pillow) => {
                    return (
                        <a href={pillow.link}><div id="product">
                        <div id="prodimg"><img src={pillow.image}/></div>
                        <div id="prodtitle"><h3>{pillow.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
            </>
        )
    }
}

export default Pillow