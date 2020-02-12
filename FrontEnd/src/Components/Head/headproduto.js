import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Header} from 'react-native-elements';


//HeadHome
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';

export default class HeadProduto extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {
            favorito,
            onClikeFavorito,
            navigation,
            routeBack,
            openTelaSearhcView,
                        
        
        } = this.props;

      

        
        return(
            <Header 
                    leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Produto</Text>}
                    rightComponent={
                        <HeadGrupo>
                            <HeadSearch opressFunc={openTelaSearhcView} />
                            <HeadList   opressFunc={this.openMenuDrawer} />
                        </HeadGrupo>
                    }
                    containerStyle={{
                        backgroundColor: '#0086ff',
                        justifyContent: 'space-around',
                       
                      }}
                />
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