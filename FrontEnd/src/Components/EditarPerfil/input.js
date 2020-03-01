import React,{Fragment, PureComponent} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Input} from 'react-native-elements'; 

import Theme from "../../Style";

export default class InputText extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){

        const {
            placeholder,
            value,
            nameInput,
            errorMessage,
            onChangeText,
            leftIcon,
            inputStyle,
            placeholderTextColor,
        } = this.props;


        var placeholderColor = placeholderTextColor != null ? placeholderTextColor: "#000";

        return(
            <Fragment>

                <View style={styles.containerTitle} >   

                    <Input
                        label = {nameInput != null? <Text style={[styles.tituloText, Theme.PrimaryColor]}>{nameInput}</Text> : null }
                        leftIcon = {leftIcon != null ? leftIcon : null}
                        value = {value}
                        placeholder = {placeholder}
                        placeholderTextColor={placeholderColor}
                        inputStyle= {inputStyle != null? inputStyle: {}}
                        errorStyle={{ color: 'red' }}
                        errorMessage = {errorMessage}
                        onChangeText = { (text) => {onChangeText(text);} } 
                    />
                  
                </View> 

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    containerTitle:{
        marginBottom:5,
    },

    tituloText:{
        fontSize:15,
        fontWeight:"bold",
    },

    inputTitle:{
        height:50,
        borderWidth: .5, 
        borderRadius:5,
        paddingLeft:10,
        paddingTop:0,
    },


});