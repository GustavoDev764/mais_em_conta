import React from 'react';
import {View, Text,TouchableOpacity, Image} from 'react-native';
import {Divider, Rating} from 'react-native-elements';


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
            <>
                <TouchableOpacity onPress={()=>{alert("ir para tela de produto");}} 
                    style={{
                            flexDirection:"row", 
                            padding:10,
                            justifyContent:"space-between",
                            height:119,
                        }}>
                                        
                                        
                    <View style={{height:80, width:"30%", }}>
                        <View style={{flex:1, }}>
                            <Image source={{uri: principaImage}} style={{flex:1, width:null, height:null, resizeMode:"contain"}} />
                        </View>
                    </View>
                                            
                    <View style={{marginLeft: 2,width:"70%",  justifyContent:"flex-start",}}>
                                                
                        <View style={{height:60, padding:2,}}>
                            
                            <View style={{flexDirection:"column", alignItems:"flex-start"}}>       

                                    <View style={{flexDirection:"row",marginTop:5, }}>
                                        <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$</Text>
                                        <View style={{flexDirection:"row"}}>
                                            <Text style={{fontSize:17, fontWeight:"bold",marginLeft:5, color:"#2f2f2f"}}>1.615</Text>
                                            
                                            { ( parseFloat(valorArray[1]) > 0 ) ? 
                                        
                                                <Text numberOfLines={1} style={{fontSize:13, fontWeight:"bold",marginLeft:1,color:"#2f2f2f"}}>,{valorArray[1]} </Text>
                                                
                                                : null}
                                        </View>
                                        
                                    </View>

                           

                                    <View style={{marginLeft:0 ,marginTop:5,marginBottom:5,}}>
                                        <Rating
                                            imageSize={18}
                                            readonly
                                            ratingCount={5}
                                            startingValue={3.5}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 10 }}
                                            style={{}}
                                        />
                                    </View>

                                    <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                           
                                            textAlign:"justify",
                                            fontSize:12,
                                            color:"#505050",
                                            padding:2,
                                            marginLeft:0,
                                            }}>
                                        {descricao}
                                    </Text>
                                    
                            </View>

                            

                        </View>

                    </View>
                                    
                </TouchableOpacity>
                <Divider />
            </>
        );
    }
}