import React,{Fragment, PureComponent} from 'react';
import { View, Text, FlatList } from 'react-native';


import {Header, ListItem} from 'react-native-elements';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';


export default class InformaTecnicaProdutoScreen extends PureComponent {

    constructor(props){
        super(props);
    }


    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            
            title={<Text  style={{fontSize:13, fontWeight:"bold", color:"#0086ff"}}>{item.title}</Text>}
    subtitle={<Text style={{fontSize:12, color:"#000"}}>{item.subtitle}</Text>}
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
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Informação Técnica</Text>}
                            
                        containerStyle={{
                            backgroundColor: '#0086ff',
                            justifyContent: 'space-around',
                        }}
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