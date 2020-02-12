import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class HeadArrowBack extends React.Component{

    constructor(props){
        super(props);
    }

  

    render(){

        const { navigation, routeBack } = this.props;

        return(
            <TouchableOpacity style={{ padding:11}} onPress={()=>{return navigation.navigate(routeBack) }  }>
                <Ionicons name="ios-arrow-back" size={30} color={"#FFF"} />
            </TouchableOpacity>
        );
    }


}