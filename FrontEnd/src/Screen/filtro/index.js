import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Header} from 'react-native-elements';


//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Theme from '../../Style';
import Body from '../../Components/Body';

import TipoDeBuscar from '../../Components/Filtros/tipodebusca';
import Categorias from '../../Components/Filtros/categorias';
import Lojas from '../../Components/Filtros/loja';
import Ordena from '../../Components/Filtros/ordena';


export default class FiltroScreen extends PureComponent {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        //Drawer
        drawerLabel: "Filtro",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Filtro", 
        headerMode: "none",
        
    };

    render(){

        const {navigation} = this.props;

        const routeBack = "ListProdutoScreen";

        return(
            <Fragment>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Filtro</Text>}
                                
                        containerStyle={[{
                               
                            justifyContent: 'space-around',
                        }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                    />

                    <Body>

                        <TipoDeBuscar />

                        <Ordena />

                        <Categorias />

                        <Lojas />

                        
                    </Body>

                    <View 
                        style={[styles.footerContainer, Theme.backgroundSetimo]}
                    >

                        <View style={[styles.footerBody]}>
                            <Text style={styles.textFooter}>
                                Aplica Filtros
                            </Text>
                        </View>
                        
                    </View>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

     footerContainer:{
        position:"relative",
        marginTop:-15,
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
                            

       
     },  
     
     footerBody:{
        width:"90%",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:3,
        backgroundColor:"blue"
     },

     textFooter:{
        color:"#FFF", 
        fontSize:19,
     }
});

