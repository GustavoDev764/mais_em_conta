import React, {PureComponent, Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';



import CarouselProduto from '../../Components/CarouselProduto';


export default class CardSugestao extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {openViewProdutoTrocaData} = this.props;

        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={styles.head}>
                        <Text style={styles.text}>quem viu este, viu também</Text>                            
                    </View>

                                
                    <CarouselProduto 
                        openViewProdutoTrocaData = {openViewProdutoTrocaData}
                    />
                        
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        marginBottom:0,
        padding:5,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    head:{
        flexDirection:"row",
        marginBottom:5,
        justifyContent:"space-between",
    },

    text:{
        fontSize:15,
        fontWeight:"bold",
    }

});