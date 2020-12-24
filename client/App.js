import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Masks from './pages/Masks'
import Phonecase from './pages/Phonecase'
import Tshirts from './pages/Tshirts'
import Backpack from './pages/Backpack'
import Pillow from './pages/Pillow'
import Stationery from './pages/Stationery'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/masks">
                        <Masks />
                    </Route>
                    <Route path="/phonecase">
                        <Phonecase />
                    </Route>
                    <Route path="/tshirts">
                        <Tshirts />
                    </Route>
                    <Route path="/backpacks">
                        <Backpack />
                    </Route>
                    <Route path="/pillows">
                        <Pillow />
                    </Route>
                    <Route path="/stationery">
                        <Stationery />
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App