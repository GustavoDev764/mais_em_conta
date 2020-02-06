import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';
import {Icon} from 'native-base';
import {Divider, Rating, AirbnbRating, Button } from 'react-native-elements';


import {Card} from 'react-native-elements';

//import Components
import HeadProduto from '../../Components/Head/headproduto';
import Body from '../../Components/Body';
import ComentProduto from '../../Components/ComentarioProduto';
import CarouselProduto from '../../Components/CarouselProduto';

import { BackgroundCarousel } from "../../../BackgroundCarousel";

const {width, height} = Dimensions.get("screen");

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  ];

export default class Produto extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            favorito: false,
        }

    }

    static navigationOptions = {
        drawerLabel: "Produto",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    onClikeFavorito = (favorito) =>{

        // if(!favorito == true){
        //     alert("Produto adicionado na lista de favorito");
        // }    

        this.setState({ favorito: !favorito});
        
    }
   
    render() {
        
        const {navigation} = this.props;

        const {favorito} = this.state;

        return (
            <View style={{flex:1}}> 

                <HeadProduto 
                    navigation={navigation}
                    favorito={favorito}
                    onClikeFavorito={this.onClikeFavorito}
                />
                
                <Body>     

                   <ScrollView 
                        style={{marginTop:-10, width:width, height:height * .3, backgroundColor:"#FFF"}}
                        horizontal
                        pagingEnabled
                    
                    >
                    
                        
                        <Image
                            style={{width:width,height:height * .3}}
                            source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_1GG.jpg" }}
                            resizeMode={"contain"}
                        />
                        <Image
                            style={{width:width,height:height * .3}}
                            source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_2GG.jpg" }}
                            resizeMode={"contain"}
                        />

                        <Image
                            style={{width:width,height:height * .3}}
                            source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_3GG.jpg" }}
                            resizeMode={"contain"}
                        />
                    
                    </ScrollView>

                    <View style={{marginTop:10, padding:5,}}>

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

                        <View style={{marginBottom:15, padding:10, borderRadius:8, backgroundColor:"#FFF"}}>
                            
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                
                                <View style={{flexDirection:"column", justifyContent:"space-between"}}>
                                    <Text style={{fontSize:15, fontWeight:"bold"}}>30 Avaliações</Text>
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

                                <Button
                                    
                                    title="Avaliar"
                                    type="outline"
                                    containerStyle={{marginTop:8,}}
                                    onPress={()=>{alert("Ir para tela de Avalia Produto")}}
                                   
                                />

                            
                            </View>

                            <Divider style={{marginTop:8, marginBottom:5,}} />

                            <View style={{marginTop:8, flexDirection:"row"}}>
                                
                                
                                <View style={{flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}}>
                                    
                                    <ComentProduto />

                                    <ComentProduto />
      
                                    <View style={{width:"100%"}}>

                                       
                                        {/* Footer Card 1 */}
                                        <TouchableOpacity onPress={()=>{alert("ver todo so comentarios")}} style={{flexDirection:"row", justifyContent:"space-between"}}>
                                            <Text style={{color:"blue"}}>Ver Todos</Text>
                                            <FontAwesome name="angle-right" color="blue" size={width * .06} />
                                        </TouchableOpacity>
                                        {/* Footer Card 1 */} 

                                    </View>

                                </View> 
                            </View>
                            
                        </View>


                        <View style={{flexDirection:"column", marginBottom:0, padding:5, borderRadius:8, backgroundColor:"#FFF"}}>
                            
                            <View style={{flexDirection:"row", marginBottom:5, justifyContent:"space-between"}}>
                                <Text style={{fontSize:15, fontWeight:"bold"}}>quem viu este, viu também</Text>                            
                            </View>

                            
                            <CarouselProduto />
                    
                        </View>

                        

                    </View>

                    
                    

                </Body>
                
              
            </View>
               
              
                   

            
        );
    }
}

const styles = StyleSheet.create({
    

    image:{
        width:width,
        height:height * .3
    },

    backgroundImage: {
        height: "100%",
        width: Dimensions.get("window").width
    },
  });