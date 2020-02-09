import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';


//import Components
import HeadProduto from '../../Components/Head/headproduto';
import Body from '../../Components/Body';
import ImagesProduto from '../../Components/ImagesProduto';
import CardInfor from '../../Components/Produto/cardInfor';
import CardAvaliacao from '../../Components/Produto/cardavaliacao';
import CardSugestao from '../../Components/Produto/cardsugestao';


const {width, height} = Dimensions.get("screen");


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

                    <ImagesProduto />

                    <View style={{marginTop:10, padding:5,}}>
                       
                        <CardInfor />

                        <CardAvaliacao />
                        
                        <CardSugestao />
                    
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