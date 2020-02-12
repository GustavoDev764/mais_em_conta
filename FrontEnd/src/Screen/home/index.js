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
import { createStackNavigator } from 'react-navigation-stack';

import {Header} from 'react-native-elements';

//rotas
import ProdutoScreen from '../produto';
import DescricaoProdutoScreen from '../descricaoProduto';
import SearchBarScreen from '../searchBar';

//components
import Carrossel from '../../Components/Carousel';
import Tabs from '../../Components/Tabs';

import Head from '../../Components/Head';
import Body from '../../Components/Body';
import Grade from '../../Components/CardGradeProdutos/grade';
import List from '../../Components/CardListProdutos/list';

//HeadHome
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadMenu from '../../Components/Head/HeadMenu';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';

//aquivos json
import {Listprodutos} from '../../utils/produtoList';
import {images} from '../../utils/images';


export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);

    }
    
    static navigationOptions = {
        //Drawer
        drawerLabel: "Inicio",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Mais em Conta", 
        headerMode: "none",
        
    };
    
    //Navega por telas
    
    
    openTelaProduto = (produto) => {
        return this.props.navigation.navigate("ProdutoScreen",
           {routeBack: "HomeScreen", data: produto} );
    }

    openTelaSearhcView = () => {
        return this.props.navigation.navigate('SearchBarScreen',{routeBack: "HomeScreen"});
    }

    //Fim de Navegações

    

    
    

    openMenuDrawer = () => {
       return this.props.navigation.openDrawer();
    }

    renderCardGrade = (item, index) => {

        var total = item.produtos.length;
        
        if(total > 0){

            return(
                
                <Grade
                    key = {index}
                    openViewProduto = {this.openTelaProduto}
                    titleGrade      = {item.titleGrade}
                    produtos        = {item.produtos}
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
                    openViewProduto = {this.openTelaProduto}
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

        const {navigation} = this.props;
        
        return(
            <View style={{flex:1, }}>
                
                {/* <Head openMenu={this.openMenu} navigation={this.props.navigation} nameRoute={'SearchBar'} routeBack={'HomeScreen'} /> */}
                
                <Header 
                    leftComponent={<HeadMenu openMenu={this.openMenuDrawer} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Mais Em Conta</Text>}
                    rightComponent={
                        <HeadGrupo>
                            <HeadSearch opressFunc={this.openTelaSearhcView} />
                            <HeadList   opressFunc={this.openMenuDrawer} />
                        </HeadGrupo>
                    }
                    containerStyle={{
                        backgroundColor: '#0086ff',
                        justifyContent: 'space-around',
                      }}
                />

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


export const HomeScreenStack = createStackNavigator(
    {
        HomeScreen,
        ProdutoScreen,
        DescricaoProdutoScreen,
        SearchBarScreen,
        
        
    },
    {
        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        mode:"card",
        //transitionSpec: config,
        

        navigationOptions:{
            drawerLabel: "Inicio",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        }
      
    }
);

//Configuração Padrao
const config = {
   
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

