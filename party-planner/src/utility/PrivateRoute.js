import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    //check if user is logged in and let them in component
    // if(localStorage.getItem("token")){
    //     return <Route render={props => <Component {...props} /> } />;
    // } else {
    //     return <Redirect to="/sign-in" />;
    // }
    return <Route {...rest} render={props => {
        if(localStorage.getItem('token')){
            return <Component {...props} />
        } else {
            return <Redirect to="/sign-up" />
        }
    }}/>
};

export default PrivateRoute