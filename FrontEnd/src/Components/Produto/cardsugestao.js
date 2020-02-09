import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



import CarouselProduto from '../../Components/CarouselProduto';


export default class CardSugestao extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={styles.container}>
                            
                <View style={styles.head}>
                    <Text style={styles.text}>quem viu este, viu também</Text>                            
                </View>

                            
                <CarouselProduto />
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        marginBottom:0,
        padding:5,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    head:{
        flexDirection:"row",
        marginBottom:5,
        justifyContent:"space-between",
    },

    text:{
        fontSize:15,
        fontWeight:"bold",
    }

});