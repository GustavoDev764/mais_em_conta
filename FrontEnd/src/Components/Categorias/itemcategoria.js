import React,{Fragment, PureComponent} from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';

import Theme from '../../Style';

export default class Itemcategoria extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {CategoriaData} = this.props;

        return(
            <Fragment>
                <TouchableOpacity
                    onPress={()=>{alert("lista todos os produtos dessa categoria");}}
                    style={styles.container}
                >
                    <Text
                        style={[styles.textItem, Theme.PrimaryColor]}
                    >
                        {CategoriaData.name}
                    </Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        //borderWidth:1,
        borderBottomWidth:.5,
        borderTopWidth:.5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:50,
    },

    textItem:{
        fontSize:14,
    }
});