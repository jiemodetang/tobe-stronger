import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useLocation
  } from "react-router-dom";

const ToBe_iframe = (props) => {
    let {state} = useLocation()
    console.log(useLocation());
    
    return (
        <iframe src={state.src} frameborder="0" width="100%" height={document.body.clientHeight}></iframe>

    );
}

export default ToBe_iframe 