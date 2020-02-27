import React,{Fragment, PureComponent} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Input} from 'react-native-elements'; 


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
        } = this.props;


        return(
            <Fragment>

                <View style={styles.containerTitle} >   

                    <Input
                        label = {<Text style={styles.tituloText}>{nameInput}</Text>}
                        value = {value}
                        placeholder = {placeholder}
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