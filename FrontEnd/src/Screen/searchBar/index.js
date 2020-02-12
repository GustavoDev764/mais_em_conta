import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';


//import components
import HeadInputSearch from '../../Components/Head/HeadInputSearch';


export default class SearchBarScreen extends React.Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Pesquisa",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    openRouteBack = () => {
        alert("oi");
    }

    render(){

        return(
            <View style={{flex:1, }}>

                <HeadInputSearch {...this.props} />

            </View>
        );
    }
}