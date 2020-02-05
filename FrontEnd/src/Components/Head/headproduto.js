import React from 'react';
import {View, Text} from 'react-native';
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
            <Header style={{height:80, paddingTop:20, backgroundColor:"#f3db07"}}>
                <Left>
                    <Button transparent onPress={()=>{navigation.goBack()}}>
                        <Ionicons name='ios-arrow-round-back' style={{color:"#000", fontSize: 48,}} />
                    </Button>

                </Left>
                <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#4c4c4c"}}>Produto</Text>
                </View>

                <Right>
                    <Button transparent onPress={()=>{return  navigation.navigate('SearchBar',{routeBack: 'Produto' });}}>
                        <Icon name='search' style={{color:"#4c4c4c"} } />
                    </Button>
                        
                    <Button transparent onPress={()=>{onClikeFavorito(favorito)}}>
                        {
                            favorito ? <Icon name='heart'  style={{color:"red"}} /> : <Icon name='heart-empty'  style={{color:"red"}} />
                        }
                            
                    </Button>
                     
                        
                    <Button transparent onPress={()=>{alert("ir para minha lista de produtos")}}>
                        <Icon name='md-list-box' style={{color:"#4c4c4c"} } />
                    </Button>
                </Right>
            </Header>
        );
    }
    
}