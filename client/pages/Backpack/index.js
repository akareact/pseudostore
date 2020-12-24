import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './backpack.css'
import logo from '../../../utils/logo.svg'

class Backpack extends Component {
    state = {
        backpacks : [
            {
                name : "ALWAYS LATE FOR CLASS",
                image : "https://ih1.redbubble.net/image.1483361872.2266/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Always-late-for-class-theme-by-akata01/53812266.K1KHE?asc=u"
            },
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1480458143.1792/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Lets-minecraft-theme-by-akata01/53811792.K1KHE?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1472606455.3873/ur,backpack_front,square,1000x1000.jpg",
                link : "https://ih1.redbubble.net/image.1472561462.2515/ur,backpack_front,square,1000x1000.jpg"
            },
            {
                name : "SIMP",
                image : "https://ih1.redbubble.net/image.1472561462.2515/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/SIMP-MEME-TREND-by-akata01/53652515.K1KHE?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1472676536.4824/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/To-fart-is-an-art-pun-intended-by-akata01/53654824.K1KHE?asc=u"
            },
            {
                name : "DATE ME",
                image : "https://ih1.redbubble.net/image.1483702727.9253/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Dating-theme-date-me-for-singles-by-akata01/53799253.K1KHE?asc=u"
            },
            {
                name : "POLAR BEER",
                image : "https://ih1.redbubble.net/image.1479872844.9983/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Funny-cold-beer-theme-by-akata01/53799983.K1KHE?asc=u"
            },
            {
                name : "STUDY",
                image : "https://ih1.redbubble.net/image.1480050485.3591/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Funny-cold-beer-theme-by-akata01/53799983.K1KHE?asc=u"
            }, {
                name : "SLEEPY AF",
                image : "https://ih1.redbubble.net/image.1483319971.3355/ur,backpack_front,square,1000x1000.jpg",
                link : "https://www.redbubble.com/i/backpack/Sleepy-af-by-akata01/53813355.K1KHE?asc=u"
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
                {this.state.backpacks.map((backpack) => {
                    return (
                        <a href={backpack.link}><div id="product">
                        <div id="prodimg"><img src={backpack.image}/></div>
                        <div id="prodtitle"><h3>{backpack.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
        </>
        
        )
    }
}

export default Backpack