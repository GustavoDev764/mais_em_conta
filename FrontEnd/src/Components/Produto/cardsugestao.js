import React from 'react';
import {View, Text} from 'react-native';



import CarouselProduto from '../../Components/CarouselProduto';


export default class CardSugestao extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flexDirection:"column", marginBottom:0, padding:5, borderRadius:8, backgroundColor:"#FFF"}}>
                            
                <View style={{flexDirection:"row", marginBottom:5, justifyContent:"space-between"}}>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>quem viu este, viu também</Text>                            
                </View>

                            
                <CarouselProduto />
                    
            </View>
        );
    }
}