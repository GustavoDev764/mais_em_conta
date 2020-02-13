import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';


//import Components
import HeadProduto from '../../Components/Head/headproduto';
import Body from '../../Components/Body';
import ImagesProduto from '../../Components/ImagesProduto';
import CardInfor from '../../Components/Produto/cardInfor';
import CardAvaliacao from '../../Components/Produto/cardavaliacao';
import CardSugestao from '../../Components/Produto/cardsugestao';

import CardLoading from  '../../Components/Produto/cardLoading';


const {width, height} = Dimensions.get("screen");


export default class ProdutoScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            favorito: false,
            isRender: false,
        }

    }

    static navigationOptions = {
        drawerLabel: "Produto",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    };

    //Navegação por telas

    openTelaSearhcView = () => {
        return this.props.navigation.navigate('SearchBarScreen', {routeBack: "ProdutoScreen"});
    }

    openTelaDecricaoProduto = (produto)=>{
        return this.props.navigation.navigate('DescricaoProdutoScreen', {routeBack: "ProdutoScreen", produto: produto});
    }

    openTelaInformaTecnicaProduto = (produto)=>{
        return this.props.navigation.navigate('InformaTecnicaProdutoScreen', {routeBack: "ProdutoScreen", produto: produto});
    }

    openTelaAvaliacaesDoProduto = (produto)=>{
        return this.props.navigation.navigate('AvaliacaesDoProdutoScreen', {routeBack: "ProdutoScreen", produto: produto});
    }

    openTelaAvaliaProduto = (produto)=>{
        return this.props.navigation.navigate('AvaliaProdutoScreen', {routeBack: "ProdutoScreen", produto: produto});
    }


    //Fim de Navegações

    onClikeFavorito = (favorito) =>{
       this.setState({ favorito: !favorito});
    }

    setRender(){
       setTimeout(()=>{ this.setState({isRender: true}) }, 0);
    }

    componentDidMount(){

        if(this.state.isRender == false){
            this.setRender()
        }
    }
   
    render() {
        
        const {navigation} = this.props;

        const {favorito, isRender} = this.state;

        const data      = navigation.getParam("data");
        const routeBack = navigation.getParam("routeBack");
        
        //console.log(this.props.navigation.goBack());
       //console.log(routeBack);
        

        
        

        return (
            
            <Fragment> 
                
                <HeadProduto 
                    navigation = {navigation}
                    routeBack  = {routeBack}
                    openTelaSearhcView = {this.openTelaSearhcView}
                />

                {

                 isRender ? 
                 
                <Body>     

                
                    <ImagesProduto images = {data.images} />

                    <View style={{marginTop:10, padding:5,}}>
                        

                        
                        <CardInfor 
                            navigation={navigation}
                            produto={data}
                            openViewDecricaoProduto       = {this.openTelaDecricaoProduto}
                            openViewInformaTecnicaProduto = {this.openTelaInformaTecnicaProduto}
                            openViewAvaliacaesDoProduto   = {this.openTelaAvaliacaesDoProduto}
                            
                        />
                            
                        <CardAvaliacao
                            produto = {data}
                            openViewAvaliacaesDoProduto   = {this.openTelaAvaliacaesDoProduto}
                            openViewAvaliaProduto         = {this.openTelaAvaliaProduto}
                        />
                        
                        <CardSugestao />
                    
                    </View>

                </Body> :  <CardLoading />
                }
              
            </Fragment>
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