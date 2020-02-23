import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Divider, Icon, Button} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';


//HeadHome
import PreLoading from '../../Components/PreLoading';
import HeadMenu from '../../Components/Head/HeadMenu';
import HeadSearch from '../../Components/Head/HeadSearch';
import Body from '../../Components/Body';
import Theme from '../../Style';

import ColapsBottom from '../../Components/CestaDeProduto/colapsbottom';

//import components
import CardCestaProduto from '../../Components/CestaDeProduto';



export default class CestaDeProdutoScreen extends PureComponent{

    constructor(props){
        super(props);

    }


    static navigationOptions = {
        //Drawer
        drawerLabel: "Cesta de Produto",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Mais em Conta", 
        headerMode: "none",
        
    };

    //Navegações
    
    openTelaSearhcView = () => {
        return this.props.navigation.navigate('SearchBarScreen',{routeBack: "CestaDeProdutoScreen"});
    }

    //Fim de Navegações


    openMenuDrawer = () => {
        return this.props.navigation.openDrawer();
    }


    render(){
        return(
            <Fragment>

                <Header 
                    leftComponent={<HeadMenu openMenu={this.openMenuDrawer} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Minha Cesta</Text>}
                    rightComponent={<HeadSearch opressFunc={this.openTelaSearhcView} /> }
                    containerStyle={[{
                        justifyContent: 'space-around',
                      },Theme.tmHead, Theme.backgroundPrimaryColor]}
                />

                <Body>

                    <CardCestaProduto />
                    <CardCestaProduto />
                    <CardCestaProduto />
                    
                
                </Body>

                <ColapsBottom />

                

                
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
   
});