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

        console.log(width);
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
        width: (height > 720) ? width * .2 : 80,
        height: (height > 720) ? height * .12 : 80,
        backgroundColor:"#ffffff",
        borderRadius:3,
        padding: 5,
        marginLeft:10,
        
    },
    text:{
        fontSize:10,
        fontWeight:"bold",
        padding:1,
        marginBottom:2,
    },
    image:{
        width:50,
        height:50,
        resizeMode:"contain",
      
        
    }
});