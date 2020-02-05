import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {Card} from 'react-native-elements';

import HeadProduto from '../../Components/Head/headproduto';
import Body from '../../Components/Body';


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
            <View> 

                <HeadProduto 
                    navigation={navigation}
                    favorito={favorito}
                    onClikeFavorito={this.onClikeFavorito}
                />

                   
                <ScrollView 
                    style={{width:width, height:height * .3}}
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

                <Body>     

                    

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