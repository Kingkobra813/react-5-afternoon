import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { Switch, Route, HashRouter } from 'react-router-dom';


export default (
    <Switch>
        <Route component={NextBtn} exact path='/' />
        <Route component={WizardOne} path='/wOne' />
        <Route component={WizardTwo} path='/wtwo' />
        <Route component={WizardThree} path='/wthree' />
        <Route component={WizardFour} path='/wfour' />
        <Route component={WizardFive} path='/wfive' />
        <Route component={WizardSix} path='/wsix' />
        <Route component={WizardSeven} path='/wseven' />
        <Route component={WizardEight} path='/weight' />
        <Route component={WizardNine} path='/wnine' />
        <Route component={WizardTen} path='/wten' />
        <Route component={WizardEleven} path='/weleven' />
        <Route component={Finish} path='/finish' />
    </Switch>
)