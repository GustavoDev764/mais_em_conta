import React,{Fragment, PureComponent} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


import {Header, ListItem} from 'react-native-elements';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Theme from '../../Style';


export default class InformaTecnicaProdutoScreen extends PureComponent {

    constructor(props){
        super(props);
    }


    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            
            title={<Text  style={[styles.title]}>{item.title}</Text>}
    subtitle={<Text style={[styles.description, Theme.PrimaryColor]}>{item.subtitle}</Text>}
            bottomDivider
        />
    )


    render(){

        const {navigation} = this.props;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");

        return(
            <Fragment>
                <View style={{flex:1}}>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={[Theme.colorWhite,{fontSize:22}]}>Informação Técnica</Text>}
                            
                        containerStyle={[{
                           justifyContent: 'space-around',
                        }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                    />

                    
                 
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={produto.informacaoTecnica}
                        renderItem={this.renderItem}
                    />
                                     

                            

                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    title:{
        fontSize:13, 
        fontWeight:"bold",
        color:"#F5640C",
    },

    description:{
        fontSize:12,
 
    }
});