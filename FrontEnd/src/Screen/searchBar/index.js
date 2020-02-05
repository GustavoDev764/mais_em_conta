import React from 'react';
import {View, Text} from 'react-native';
import HeadSearch from '../../Components/Head/searchbar';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';


export default class SearchBar extends React.Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Pesquisa",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    render(){
        return(
            <View style={{flex:1, }}>

                <HeadSearch {...this.props} />

            </View>
        );
    }
}