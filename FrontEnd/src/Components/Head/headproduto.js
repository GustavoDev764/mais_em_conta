import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Header, Left, Right, Button, Icon, } from 'native-base';

export default class HeadProduto extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {
            favorito,
            onClikeFavorito,
            navigation,
        
        } = this.props;

        return(
            <Header style={styles.head}>
                <Left>
                    <Button transparent onPress={()=>{navigation.goBack()}}>
                        <Ionicons name='ios-arrow-round-back' style={styles.buttonVolta} />
                    </Button>

                </Left>
                <View style={styles.titlePage}>
                        <Text style={styles.textTitle}>Produto</Text>
                </View>

                <Right>
                    <Button transparent onPress={()=>{return  navigation.navigate('SearchBar',{routeBack: 'Produto' });}}>
                        <Icon name='search' style={styles.icon} />
                    </Button>
                        
                    <Button transparent onPress={()=>{onClikeFavorito(favorito)}}>
                        {
                            favorito ? <Icon name='heart'  style={styles.favoritoIcon} /> : <Icon name='heart-empty'  style={styles.favoritoIcon} />
                        }
                            
                    </Button>
                     
                        
                    <Button transparent onPress={()=>{alert("ir para minha lista de produtos")}}>
                        <Icon name='md-list-box' style={styles.icon} />
                    </Button>
                </Right>
            </Header>
        );
    }
    
}


const styles = StyleSheet.create({

    head:{
        height:80,
        paddingTop:20,
        backgroundColor:"#f3db07",
    },

    buttonVolta:{
        color:"#000",
        fontSize: 48,
    },

    titlePage:{
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },

    textTitle:{
        fontSize:18,
        fontWeight:"bold",
        color:"#4c4c4c",
    },

    icon:{
        color:"#4c4c4c",
    },

    favoritoIcon:{
        color:"red",
    },



});