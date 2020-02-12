import React, {Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';


import {Header} from 'react-native-elements';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Body from '../../Components/Body';
import Descricao from  '../../Components/Descricao';






export default class DescricaoProdutoScreen extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {navigation} = this.props;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");

        return(
            <Fragment>
                <View style={{flex:1,}}>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Descrição</Text>}
                        
                        containerStyle={{
                            backgroundColor: '#0086ff',
                            justifyContent: 'space-around',
                        }}
                    />

                     <Body>  

                        <View style={{marginTop:10, padding:5,}}>

                            <View style={{
                                padding:10,
                                borderRadius:8,
                                backgroundColor:"#fff"}}>

                                {
                                    produto.descricao.map((item, index)=>{
                                        return <Descricao 
                                                    key={index}
                                                    title={item.title}
                                                    text={item.text}
                                                 />;
                                    })
                                }    
                                
                            </View>
                            
                        </View>


                    </Body>


                </View>
            </Fragment>
        );
    }
}