import React from 'react';
import Routes from './src/routes/DraweRoute';


export default class App extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Routes />
        );
    }
}

