/**
 * @author: Liby Lee
 * @date: 2017/11/11
 * @description: The Main Router consists of all the routing
 */

// Import React Settings
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Import All Components
import Home from './Home.js';
import Login from './Login.js';
import NotFound from './NotFound.js';
import Publish from './Publish.js';
import ChangePassword from './ChangePassword.js';
import ViewLeasing from './ViewLeasing.js';
import ChangeProfile from './ChangeProfile.js';
import About from './About.js';
import SearchPage from './SearchPage.js';
import Display from './Display.js';
import GoogleMapTest from './GoogleMapTest.js';

const Main = () => {
    return (<Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/display' component={Display}/>
        <Route exact path='/publish' component={Publish}/>
        <Route exact path='/leasing/view' component={ViewLeasing}/>
        <Route exact path='/profile/edit' component={ChangeProfile}/>
        <Route exact path='/profile/change_password' component={ChangePassword}/>
        <Route exact path='/searchpage' component={SearchPage}/>
        <Route exact path='/map' component={GoogleMapTest}/>
        <Route path='*' component={NotFound}/>
    </Switch>);
};

export default Main;
