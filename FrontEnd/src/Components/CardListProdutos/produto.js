import React from 'react';
import {View, Text,TouchableOpacity, Image, Dimensions} from 'react-native';
import {Divider, Rating} from 'react-native-elements';

const { width, height } = Dimensions.get('screen');

export default class Produto extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){

        const { produto } = this.props;

        const {

            id,
            title,
            valor,
            rating,
            descricao,
            principaImage,
            images,
            
        } = produto;

        var valorArray = valor.split(',');

        return(
            <>
                <TouchableOpacity onPress={()=>{alert("ir para tela de produto");}} 
                    style={{
                            flexDirection:"row", 
                            padding:10,
                            justifyContent:"space-between",
                            height: height * .19,
                           
                        }}>
                                        
                                        
                    <View style={{height:"100%", width:"35%", }}>
                        <View style={{flex:1, }}>
                            <Image source={{uri: principaImage}} style={{flex:1, width:null, height:null, resizeMode:"contain"}} />
                        </View>
                    </View>
                                            
                    <View style={{marginLeft: 3, padding:2, width:"65%", alignItems:"flex-start", justifyContent:"flex-start",}}>
                                                
                        <View style={{flexDirection:"row",marginTop:5,  }}>
                            <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:17, fontWeight:"bold",marginLeft:5, color:"#2f2f2f"}}>1.615</Text>
                                            
                                { ( parseFloat(valorArray[1]) > 0 ) ? 
                                        
                                    <Text numberOfLines={1} style={{fontSize:13, fontWeight:"bold",marginLeft:1,color:"#2f2f2f"}}>,{valorArray[1]} </Text>
                                                
                                    : null}
                            </View>
                                        
                        </View>

                    
                        <View style={{marginLeft:0 ,marginTop:5,marginBottom:5, }}>
                            <Rating
                                imageSize={18}
                                readonly
                                ratingCount={5}
                                startingValue={rating}
                                onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 10 }}
                                style={{}}
                            />
                        </View>

                        <View style={{}}>
                                               
                            <Text 
                                numberOfLines={2}
                                style={{
                                            
                                    textAlign:"left",
                                    fontSize:12,
                                    color:"#505050",
                                    padding:2,
                                    marginLeft:0,
                                                
                                    }}>
                                        
                                {descricao}
                            </Text>

                        </View>     
                                    
                         

                            

                        

                    </View>
                                    
                </TouchableOpacity>
                <Divider />
            </>
        );
    }
}