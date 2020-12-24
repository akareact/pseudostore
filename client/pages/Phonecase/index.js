import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './phonecase.css'
import logo from '../../../utils/logo.svg'

class Phonecase extends Component {
    state ={
        phonecases : [
            {
                name : "SLEEPY AF",
                image : "https://ih1.redbubble.net/image.1480563190.3355/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Sleepy-af-by-akata01/53813355.23I0V?asc=u"
            },
            {
                name : "EVERYDAY COFFEEDAY",
                image : "https://ih1.redbubble.net/image.1480496006.2550/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Everyday-coffee-day-theme-by-akata01/53812550.23I0V?asc=u"
            },
            {
                name : "ALWAYS LATE FOR CLASS",
                image : "https://ih1.redbubble.net/image.1562876467.2266/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Always-late-for-class-theme-by-akata01/53812266.23I0V?asc=u"
            }, 
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1480458088.1792/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Lets-minecraft-theme-by-akata01/53811792.23I0V?asc=u"
            },
            {
                name : "TALK",
                image : "https://ih1.redbubble.net/image.1480414839.0937/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Dont-stalk-just-talk-theme-by-akata01/53810937.23I0V?asc=u"
            },
            {
                name : "SLEEPING ALL DAY AWAKE ALL NIGHT",
                image : "https://ih1.redbubble.net/image.1483397212.0136/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Sleep-all-day-awake-all-night-theme-by-akata01/53810136.23I0V?asc=u"
            },
            {
                name : "MATHS IS MEAN",
                image : "https://ih1.redbubble.net/image.1483407427.9763/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Maths-is-mean-theme-by-akata01/53809763.23I0V?asc=u"
            },
            {
                name : "I NEVER COPY MY HOMEWORK",
                image : "https://ih1.redbubble.net/image.1480343849.9495/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/I-never-copy-my-homework-except-maths-theme-by-akata01/53809495.23I0V?asc=u"
            },
            {
                name : "BIRTHDAY IS CLOSE",
                image : "https://ih1.redbubble.net/image.1480318511.8979/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Birthday-is-close-by-akata01/53808979.23I0V?asc=u"
            },
            {
                name : "ROSES ARE RED...",
                image : "https://ih1.redbubble.net/image.1480299295.8590/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Dont-eat-my-food-theme-by-akata01/53808590.23I0V?asc=u"
            },
            {
                name : "CHILLPILL",
                image : "https://ih1.redbubble.net/image.1480203507.6673/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Where-can-i-get-a-chill-pill-funny-theme-by-akata01/53806673.23I0V?asc=u"
            },
            {
                name : "STUD",
                image : "https://ih1.redbubble.net/image.1480050400.3591/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Stud-theme-by-akata01/53803591.23I0V?asc=u"
            },
            {
                name : "TOO MUCH MAKEUP",
                image : "https://ih1.redbubble.net/image.1483466046.2744/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Is-my-makeup-too-much-theme-by-akata01/53802744.23I0V?asc=u"
            },
            {
                name : "PINK",
                image : "https://ih1.redbubble.net/image.1479961487.1792/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Pink-love-YES-or-NO-theme-by-akata01/53801792.23I0V?asc=u"
            },
            {
                name : "NETFLIX AND CHILL",
                image : "https://ih1.redbubble.net/image.1483483497.0580/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Netflix-and-chill-then-pill-theme-by-akata01/53800580.23I0V?asc=u"
            },
            {
                name : "POLAR BEER",
                image : "https://ih1.redbubble.net/image.1479872807.9983/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Funny-cold-beer-theme-by-akata01/53799983.23I0V?asc=u"
            },
            {
                name : "DATE ME",
                image : "https://ih1.redbubble.net/image.1479837325.9253/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Dating-theme-date-me-for-singles-by-akata01/53799253.23I0V?asc=u"
            },
            {
                name : "SLEEPOVER",
                image : "https://ih1.redbubble.net/image.1478396776.0161/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Sleepover-theme-by-akata01/53770161.23I0V?asc=u"
            },
            {
                name : "POSSESSIVE ABOUT MY CHAPSTICK",
                image : "https://ih1.redbubble.net/image.1477580927.3726/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Possessive-about-my-chapstick-by-akata01/53753726.23I0V?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1472690008.4824/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/To-fart-is-an-art-pun-intended-by-akata01/53654824.23I0V?asc=u"
            },
            {
                name : "SIMP",
                image : "https://ih1.redbubble.net/image.1477482320.2515/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/SIMP-MEME-TREND-by-akata01/53652515.23I0V?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1472606437.3873/icr,iphone_12_tough,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
                link : "https://www.redbubble.com/i/iphone-case/Good-vibes-trendy-black-and-white-by-akata01/53643873.23I0V?asc=u"
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
            
            <div id="info"><h2 >"Cases are available for iphone as well as android.<br />If you like a case, click on it to learn more about color, size, phone type and other related options.
                <br />Tough cases are available to protect your phone from fall damage"</h2></div>
            <hr id="break"></hr>
            <div id ="products">
                {this.state.phonecases.map((phcase) => {
                    return (
                        <a href={phcase.link}><div id="product">
                        <div id="prodimg"><img src={phcase.image}/></div>
                        <div id="prodtitle"><h3>{phcase.name}</h3></div>
                        
                </div></a>
                        
                    )
                } )}
            </div>
            </>
        )
    }
}

export default Phonecase