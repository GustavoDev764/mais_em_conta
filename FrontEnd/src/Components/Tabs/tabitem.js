import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("screen");

export default class TabItem extends React.Component{

    constructor(props){
        super(props)
    }

    categoriaRoute(route, params){
        alert("ir para pagina: "+ route+"\ncom idCategoria: "+params[0].idCategoria);
    }

    render(){

        const {title, image, link, params} = this.props;

        return(
            <TouchableOpacity onPress={()=>{return this.categoriaRoute(link, params);}} style={styles.tabItem}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />
                <Text style={styles.text}>{title}</Text>      
            </TouchableOpacity> 
        );
    }
}

const styles = StyleSheet.create({

    tabItem:{
        flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-between",
        width:80,
        height:80,
        backgroundColor:"#ffffff",
        borderRadius:3,
        marginLeft:10,
        padding:10,
    },
    text:{
        fontSize:10,
        fontWeight:"bold"
    },
    image:{
        width:50,
        height:50,
        resizeMode:"contain",
    }
});