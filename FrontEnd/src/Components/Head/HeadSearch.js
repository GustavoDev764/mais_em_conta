import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class HeadSearch extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        const { opressFunc} = this.props;
        
        return(

            <TouchableOpacity onPress={opressFunc}>
                    <Ionicons name="ios-search" size={30} color={"#FFF"} />
            </TouchableOpacity>
        );
    }


}