import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider, Rating, Button} from 'react-native-elements';
import {Icon} from 'native-base'

export default class CardInfor extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{marginBottom:15,padding:10, borderRadius:8, backgroundColor:"#FFF"}}>
                            
                <View style={{marginBottom:5,}}>
                    
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign:"left"}}>
                        Computador Gamer Completo Com
                        Monitor Led Intel Core I5 8gb
                        Hd 500gb (nvidia Geforce Gt) Kit
                        Gamer Com Mousepad Easypc Light
                    </Text>

                                

                    <View style={{marginTop:8, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, textAlign:"left"}}>
                                        Codigo: 85787784
                        </Text>

                        <TouchableOpacity style={{}} onPress={()=>{alert("ir para tela de avalia produto");}}>
                            <Rating
                                imageSize={18}
                                readonly
                                ratingCount={5}
                                startingValue={3}
                                onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 10 }}
                                style={{}}
                            />
                        </TouchableOpacity>
                                    
                    </View>

                    <TouchableOpacity onPress={()=>{alert("ir para tela de denuncia")}}>
                        <Text style={{fontSize:12, fontWeight:"bold", color:"red"}}>Denunciar Anúncio</Text>
                    </TouchableOpacity>


                </View>

                <Divider style={{marginTop:8, marginBottom:5,}} />

                <View style={{flexDirection:"column", alignItems:"center", marginTop:8, marginBottom:5,}} >

                    <Text style={{fontSize:30, fontWeight:"bold"}}>R$ 1.574,32</Text>
                    <Button
                        icon={
                            <Icon name="md-list-box"
                                        
                            style={{marginRight:5, color:"#FFF", fontSize:20}}
                            />
                        }
                        title="Adiciona a Lista"
                        type="solid"
                        containerStyle={{marginTop:8,}}
                        buttonStyle={{backgroundColor:"red", padding:10}}
                        onPress={()=>{alert("Adiciona o produto a lista")}}

                    />
                                
                </View>

                <View style={{marginTop:8, marginBottom:5,}} >

                    <Button
                        title="Descrição"
                        type="outline"
                        containerStyle={{marginTop:8,}}
                        onPress={()=>{alert("Ir para tela de Descrição")}}
                    />

                                

                    <Button
                                    
                        title="Informação Técnicas"
                        type="outline"
                        containerStyle={{marginTop:8,}}
                        onPress={()=>{alert("Ir para tela de Informação Técnicas")}}
                                   
                    />
                            
                </View>

            </View>
        );
    }
}