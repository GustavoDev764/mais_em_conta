import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';

const {width, height} = Dimensions.get("screen");

//import components
import PreLoading from '../PreLoading';
import Theme from '../../Style';

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
            <TouchableOpacity onPress={()=>{return this.categoriaRoute(link, params);}}
             style={[styles.tabItem, Theme.backgroundSetimo]}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                    PlaceholderContent={<PreLoading />}
                />
                <Text style={[styles.text, Theme.PrimaryColor]}>{title}</Text>      
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