import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class CarouseItem extends React.Component{
    render(){
        return(
            <View style={{height:160, width:350,  marginLeft:2, borderWidth:0.5, borderColor:"#dddddd"}}>
                <View style={{flex:1,}}>
                    <Image source={this.props.image} style={{flex:1, borderRadius:10, width:null, height:null, resizeMode:"cover"}} />
                </View>
            </View>
        );
    }
}