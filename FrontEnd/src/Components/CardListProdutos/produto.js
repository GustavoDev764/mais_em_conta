import React from 'react';
import {View, Text,TouchableOpacity, Image} from 'react-native';


export default class Produto extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){

        const {
            id,
            title,
            valor,
            descricao,
            principaImage,
            images,

        } = this.props;

        var valorArray = valor.split(',');

        return(
            <TouchableOpacity onPress={()=>{alert("ir para tela de produto");}} style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                                    
                                    
                <View style={{height:80, width:"30%",}}>
                    <View style={{flex:1,}}>
                        <Image source={{uri: principaImage}} style={{flex:1, width:null, height:null, resizeMode:"contain"}} />
                    </View>
                </View>
                                        
                <View style={{width:"70%", justifyContent:"flex-start",}}>
                                            
                    <View style={{width:null, height:50, borderWidth:0,padding:2 }}>
                                                
                        <View style={{flexDirection:"row",marginLeft:5, marginTop:5,}}>
                            <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:17, fontWeight:"bold",marginLeft:5, color:"#2f2f2f"}}>1.615</Text>
                                
                                { ( parseFloat(valorArray[1]) > 0 ) ? 
                            
                                    <Text numberOfLines={1} style={{fontSize:13, fontWeight:"bold",marginLeft:1,color:"#2f2f2f"}}>,{valorArray[1]} </Text>
                                    
                                    : null}
                            </View>
                        </View>

                        <Text numberOfLines={2} ellipsizeMode="tail" style={{borderWidth:0,textAlign:"justify", fontSize:12, color:"#505050", padding:2}}>
                            {descricao}
                        </Text>

                    </View>

                </View>
                                
            </TouchableOpacity>
        );
    }
}