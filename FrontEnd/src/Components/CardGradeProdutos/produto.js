import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

export default class Produto extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {
            isBorder,
            id,
            title,
            valor,
            descricao,
            principaImage,
            images,
        } = this.props;

        var valorArray = valor.split(',');

        return(

            <TouchableOpacity onPress={()=>{alert("ir para tela de produto")}} style={{flex:1, borderColor:"#8e8e8ead", borderRightWidth: isBorder ? 0.5 : 0 }}>

                                           
                <View style={{height:130}}>
                    <View style={{flex:1,}}>
                        <Image source={{uri: principaImage}} style={{flex:1, width:null, height:null, resizeMode:"contain"}} />
                    </View>
                </View>

                <View style={{flexDirection:"row",marginLeft:5, marginTop:5,}}>
                    <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:17, fontWeight:"bold",marginLeft:5, color:"#2f2f2f"}}>{valorArray[0]}</Text>
                        { ( parseFloat(valorArray[1]) > 0 ) ? 
                            
                            <Text numberOfLines={1} style={{fontSize:13, fontWeight:"bold",marginLeft:1,color:"#2f2f2f"}}>,{valorArray[1]} </Text>
                            
                            : null}
                        
                    </View>
                </View>

                <View style={{borderWidth:0,padding:2 }}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={{borderWidth:0,textAlign:"justify", fontSize:12, color:"#505050", padding:2}}>
                       {descricao}
                    </Text>
                </View>
                                            
            </TouchableOpacity>
        );
    }
}