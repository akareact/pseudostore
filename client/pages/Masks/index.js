import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './masks.css'
import logo from '../../../utils/logo.svg'

class Masks extends Component {
    state={
        show : "fitted",
        fittedlabelcolor : "#ff7100",
        fittedlabeltextcolor : "white",
        flatlabelcolor : "white",
        flatlabeltextcolor : "#ff7100",
        kidslabelcolor : "white",
        kidslabeltextcolor : "#ff7100",
        fittedMasks : [
        {
            name : "IS MY MAKEUP TOO MUCH?",
            image : "https://ih1.redbubble.net/image.1964150694.2744/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
           link : "https://www.redbubble.com/i/mask/Is-my-makeup-too-much-theme-by-akata01/53802744.6BSL1?asc=u"
        },
        {
            name : "SIMP",
            image : "https://ih1.redbubble.net/image.1964182354.2515/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/SIMP-MEME-TREND-by-akata01/53652515.6BSL1?asc=u"
        },
        {
            name : "JUST VIBING",
            image : "https://ih1.redbubble.net/image.1964186085.3873/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Good-vibes-trendy-black-and-white-by-akata01/53643873.6BSL1?asc=u"
        },
        {
            name : "TO FART IS AN ART",
            image : "https://ih1.redbubble.net/image.1964189759.4824/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/To-fart-is-an-art-pun-intended-by-akata01/53654824.6BSL1?asc=u"
        },
        {
            name : "POSSESSIVE ABOUT MY CHAPSTICK",
            image : "https://ih1.redbubble.net/image.1964193329.3726/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Possessive-about-my-chapstick-by-akata01/53753726.6BSL1?asc=u"
        },
        {
            name : "STUDY",
            image : "https://ih1.redbubble.net/image.1964201763.3591/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Stud-theme-by-akata01/53803591.6BSL1?asc=u"
        },
        {
            name : "TALK",
            image : "https://ih1.redbubble.net/image.1964207311.0937/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Dont-stalk-just-talk-theme-by-akata01/53810937.6BSL1?asc=u"
        },
        {
            name : "LETS MINECRAFT",
            image : "https://ih1.redbubble.net/image.1964211880.1792/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Lets-minecraft-theme-by-akata01/53811792.6BSL1?asc=u"
        },
        {
            name : "SLEEPY AF",
            image : "https://ih1.redbubble.net/image.1964216857.3355/ur,fitted_mask_flatlay_fitted_regular,square,1000x1000.jpg",
            link : "https://www.redbubble.com/i/mask/Sleepy-af-by-akata01/53813355.6BSL1?asc=u"
        }
    ],
        flatMasks : [
            
            {
                name : "IS MY MAKEUP TOO MUCH?",
                image : "https://ih1.redbubble.net/image.1483466061.2744/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Is-my-makeup-too-much-theme-by-akata01/53802744.9G0D8?asc=u"
            },
            {
                name : "SIMP",
                image : "https://ih1.redbubble.net/image.1472700724.2515/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/SIMP-MEME-TREND-by-akata01/53652515.9G0D8?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1472606425.3873/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Good-vibes-trendy-black-and-white-by-akata01/53643873.9G0D8?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1472676493.4824/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/To-fart-is-an-art-pun-intended-by-akata01/53654824.9G0D8?asc=u"
            },
            
            {
                name : "POSSESSIVE ABOUT MY CHAPSTICK",
                image : "https://ih1.redbubble.net/image.1477580944.3726/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Possessive-about-my-chapstick-by-akata01/53753726.9G0D8?asc=u"
            },
            {
                name : "STUDY",
                image : "https://ih1.redbubble.net/image.1480050411.3591/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Stud-theme-by-akata01/53803591.9G0D8?asc=u"
            },
            {
                name : "TALK",
                image : "https://ih1.redbubble.net/image.1480414855.0937/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Dont-stalk-just-talk-theme-by-akata01/53810937.9G0D8?asc=u"
            },
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1480458083.1792/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Lets-minecraft-theme-by-akata01/53811792.F8Y4C?asc=u"
            },
            {
                name : "SLEEPY AF",
                image : "https://ih1.redbubble.net/image.1480535305.3355/ur,mask_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Sleepy-af-by-akata01/53813355.5J1F6?asc=u"
            }
            
        ],
        kidsMasks : [
            {
                name : "SIMP",
                image : "https://ih1.redbubble.net/image.1472700724.2515/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/SIMP-MEME-TREND-by-akata01/53652515.F8Y4C?asc=u"
            },
            {
                name : "JUST VIBING",
                image : "https://ih1.redbubble.net/image.1472606425.3873/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Good-vibes-trendy-black-and-white-by-akata01/53643873.F8Y4C?asc=u"
            },
            {
                name : "TO FART IS AN ART",
                image : "https://ih1.redbubble.net/image.1472676493.4824/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/To-fart-is-an-art-pun-intended-by-akata01/53654824.F8Y4C?asc=u"
            },
            {
                name : "POSSESSIVE ABOUT MY CHAPSTICK",
                image : "https://ih1.redbubble.net/image.1477580944.3726/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Possessive-about-my-chapstick-by-akata01/53753726.F8Y4C?asc=u"
            },
            {
                name : "STUDY",
                image : "https://ih1.redbubble.net/image.1480050411.3591/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Stud-theme-by-akata01/53803591.F8Y4C?asc=u"
            },
            {
                name : "LETS MINECRAFT",
                image : "https://ih1.redbubble.net/image.1480458083.1792/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Lets-minecraft-theme-by-akata01/53811792.F8Y4C?asc=u"
            },
            {
                name : "SLEEPY AF",
                image : "https://ih1.redbubble.net/image.1480535305.3355/ur,kids_mask_7x3_flatlay_front,product,1000x1000.jpg",
                link : "https://www.redbubble.com/i/mask/Sleepy-af-by-akata01/53813355.F8Y4C?asc=u"
            },
            
        ]
    }
 
  
    handleShowFitted = () => {
    this.setState({
        show : "fitted",
        fittedlabelcolor : "#ff7100",
        fittedlabeltextcolor : "white",
        flatlabelcolor : "white",
        flatlabeltextcolor : "#ff7100",
        kidslabelcolor : "white",
        kidslabeltextcolor : "#ff7100"
        
    })
    }
 
    handleShowFlat= () => {
     this.setState({
         show : "flat",
        fittedlabelcolor : "white",
        fittedlabeltextcolor : "#ff7100",
        flatlabelcolor : "#ff7100",
        flatlabeltextcolor : "white",
        kidslabelcolor : "white",
        kidslabeltextcolor : "#ff7100"
     })
     }
     handleShowKids= () => {
        this.setState({
        show : "kids",
        fittedlabelcolor : "white",
        fittedlabeltextcolor : "#ff7100",
        flatlabelcolor : "white",
        flatlabeltextcolor : "#ff7100",
        kidslabelcolor : "#ff7100",
        kidslabeltextcolor : "white"
        })
        }

    render() {
        return (
            <>
            <div id="header">
                
                <div id="logo"><img id="logoimg" src={logo}/></div>
                <div id="storeName">
                    HAPPY DESIGN 
                </div>
            </div>
            <div id="sortby">
                <div className="sortbylabel" style ={{"backgroundColor" : `${this.state.fittedlabelcolor}`, "color" : `${this.state.fittedlabeltextcolor}`}} onClick={() => {this.handleShowFitted()}}><b>FITTED MASKS</b></div>
                <div className="sortbylabel" style ={{"backgroundColor" : `${this.state.flatlabelcolor}`, "color" : `${this.state.flatlabeltextcolor}`}} onClick={() => {this.handleShowFlat()}}><b>FLAT MASKS</b></div>
                <div className="sortbylabel" style ={{"backgroundColor" : `${this.state.kidslabelcolor}`, "color" : `${this.state.kidslabeltextcolor}`}} onClick={() => {this.handleShowKids()}}><b>KIDS MASKS</b></div>
            </div>
            <hr id="break"></hr>
            <div id="info"><h2 >"If you like a product, click on it to learn more about color, size and other related options"</h2></div>
            <div id="products">

            {this.state.show === "fitted" ? 
            <>
            {this.state.fittedMasks.map((prod) => {
                return (
                   <a href={prod.link}><div id="product">
                   <div id="prodimg"><img src={prod.image}/></div>
                   <div id="prodtitle"><h3>{prod.name}</h3></div>
                   
           </div></a> 
                )
            })}
            </> : 
            this.state.show === "flat" ? 
            <>
            
            {this.state.flatMasks.map((prod) => {
                return (
                    <a href={prod.link}><div id="product">
                    <div id="prodimg"><img src={prod.image}/></div>
                    <div id="prodtitle"><h3>{prod.name}</h3></div>
                    
            </div></a>
                )
            })}
            </> : 
            <>
            {this.state.kidsMasks.map((prod) => {
                return (
                    <a href={prod.link}><div id="product">
                    <div id="prodimg"><img src={prod.image}/></div>
                    <div id="prodtitle"><h3>{prod.name}</h3></div>
                   
            </div></a>
                )
            })}
            </>
            }
            </div>
            
            </>
        )
    }
}


export default Masks