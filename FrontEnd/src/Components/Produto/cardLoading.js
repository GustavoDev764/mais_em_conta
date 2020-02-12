import React, {PureComponent, Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Divider, Rating, Button} from 'react-native-elements';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const {height} = Dimensions.get("window");

//import components
import PreLoading from '../PreLoading';

export default class CardLoading extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                    <PreLoading />
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({



    container:{
        height: height,
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    
});