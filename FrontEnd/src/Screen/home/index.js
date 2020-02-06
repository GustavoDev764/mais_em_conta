import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    
} from 'react-native';

import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';


//rotas
import SearchBar from '../searchBar';

//components
import CarouseItem from '../../Components/CarouseItem';
import Carrossel from '../../Components/Carousel';
import Tabs from '../../Components/Tabs';

import Head from '../../Components/Head';
import Body from '../../Components/Body';
import Grade from '../../Components/CardGradeProdutos/grade';
import List from '../../Components/CardListProdutos/list';

//aquivos json
import {Listprodutos} from '../../utils/produtoList';
import {images} from '../../utils/images';


export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Inicio",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    openSearhcView = () =>{
        return this.props.navigation.navigate('SearchBar');
    }

    openMenu = () => {
        return this.props.navigation.openDrawer();
    }

    carrinho = ()=>{
        alert("carrinho");
    }

    renderCardGrade = (item, index) => {

        var total = item.produtos.length;
        if(total > 0){

            return(
                
                <Grade
                    key = {index}
                    titleGrade = {item.titleGrade}
                    produtos   = {item.produtos}
                />
            );

        }
    }

    renderCardList = (item, index) => {

        var total = item.produtos.length;
        if(total > 0){

            return(
                
                <List
                    key = {index}
                    titleGrade = {item.titleGrade}
                    produtos   = {item.produtos}
                />
            );

        }
    }

    switchCard = (item, index) => {

        
        switch (item.typeCard) {

            case 'grade':
                return this.renderCardGrade(item, index);
                break;
            
            case 'list':
                return this.renderCardList(item, index);
                break;
        
        }
    }

    render(){
        return(
            <View style={{flex:1, }}>
               
                <Head openMenu={this.openMenu} navigation={this.props.navigation} nameRoute={'SearchBar'} routeBack={'HomeScreen'} />

                <Body>
                
                    <Carrossel style={{marginTop:10, marginBottom:10,}} image={images} />
                    
                    <Tabs />
                      
                        
                        {
                            Listprodutos.map((item, index)=>{

                            return this.switchCard(item, index);

                            })
                        }
                </Body>
                
            </View>
        );
    }


}



const styles = StyleSheet.create({

    head:{
        backgroundColor: '#f3db07',
        justifyContent: 'space-around',
    },

    image:{
        width: 48,
        height: 48
    },

    title:{
        
    },
        
    container: {
        flex:1, 
        
    },
});

