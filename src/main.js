import React from 'react'
import Home from './page/home'
import Bmi from './page/bmi'
import Bank from './page/bank'
import Ppn from './page/ppn'
import Biner from './page/biner'
import Oktal from './page/oktal'
import Desimal from './page/desimal'
import Hexadesimal from './page/hexadesimal'
import { Route, Switch } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bmi} />
                 <Route path="/bank" component={Bank} />
                 <Route path="/ppn" component={Ppn} />
                <Route path="/biner" component={Biner} />
                <Route path="/oktal" component={Oktal} />
                <Route path="/desimal" component={Desimal} />
                <Route path="/hexadesimal" component={Hexadesimal} />
            </Switch>
        )
    }
}