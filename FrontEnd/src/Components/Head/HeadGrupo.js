import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class HeadGrupo extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        
        const {children} = this.props;

        return(
            <View style={{width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
                {children}
            </View>
        );
    }


}