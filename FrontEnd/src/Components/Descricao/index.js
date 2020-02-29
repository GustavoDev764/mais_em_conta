import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Theme from '../../Style';

export default class Descricao extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {title, text} = this.props;

        return(
            <Fragment>
                <View style={[styles.container, ]}>

                    <Text style={[styles.title, Theme.PrimaryColor]}>
                        {title}
                    </Text>

                    <Text style={[styles.text, Theme.PrimaryColor]}>
                        {text}
                    </Text>

                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-between",
    },

    title:{
        fontSize:15,
        fontWeight:"bold",
        textAlign:"left",
    },

    text:{
        fontSize:13, textAlign:"left",
    }
});