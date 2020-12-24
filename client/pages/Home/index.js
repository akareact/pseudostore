import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import mask from '../../../utils/mask.jpg'
import phonecase from '../../../utils/phonecase.jpg'
import tshirt from '../../../utils/tshirt4.jpg'
import backpack from '../../../utils/backpack.jpg'
import stationery from '../../../utils/stationery.jpg'
import pillow from '../../../utils/pillow.jpg'
import apron from '../../../utils/apron.jpg'
import mug from '../../../utils/mug2.jpg'
import logo from '../../../utils/logo.svg'
import sleepingallday from '../../../utils/sleepingallday.jpg'
import justvibing from '../../../utils/justvibing.jpg'
import sleepover from '../../../utils/sleepover.jpg'
import chapstick from '../../../utils/chapstick.jpg'
import fart from '../../../utils/fart.jpg'
import simp from '../../../utils/simp.jpg'
import dateme from '../../../utils/dateme.jpg'
import stalk from '../../../utils/stalk.jpg'
import minecraft from '../../../utils/minecraft.jpg'
import chillpill from '../../../utils/chillpill.jpg'
import rosesarered from '../../../utils/rosesarered.jpg'
import mathsismean from '../../../utils/mathsismean.jpg'
import polarbeer from '../../../utils/polarbeer.jpg'
import pink from '../../../utils/pink.jpg'
import netflix from '../../../utils/netflix.jpg'
import study from '../../../utils/study.jpg'
import lateforclass from '../../../utils/lateforclass.jpg'
import makeup from '../../../utils/makeup.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {

    render () {
        return (
            <>
            <div id="header">
                <div id="logo"><img id="logoimg" src={logo}/></div>
                <div id="storeName">
                    HAPPY DESIGN 
                </div>
            </div>
            
            
            <div id="products">
                
                <Link to="/masks">
                    <div id="product">
                        <div id="prodimg"><img src={mask}/></div>
                        <div id="prodtitle"><h3>MASKS</h3></div>
                    </div>
                </Link>
                <Link to="/phonecase">
                <div id="product">
                    <div id="prodimg"><img src={phonecase}/></div>
                    <div id="prodtitle"><h3>PHONE CASE</h3></div>
                </div>
                </Link>
                <Link to="/tshirts"><div id="product">
                    <div id="prodimg"><img src={tshirt}/></div>
                    <div id="prodtitle"><h3>T-SHIRTS</h3></div>
                </div></Link>
                <Link to="/backpacks"><div id="product">
                    <div id="prodimg"><img src={backpack}/></div>
                    <div id="prodtitle"><h3>BACKPACKS</h3></div>
                </div></Link>
                <Link to="/pillows">
                <div id="product">
                    <div id="prodimg"><img src={pillow}/></div>
                    <div id="prodtitle"><h3>THROW PILLOWS</h3></div>
                </div>
                </Link>
                
                <Link to="/stationery"><div id="product">
                    <div id="prodimg"><img src={stationery}/></div>
                    <div id="prodtitle"><h3>STATIONERY</h3></div>
                </div></Link>
                
                
              
                
                
            </div>
            </>
        )
    }
}

export default Home;