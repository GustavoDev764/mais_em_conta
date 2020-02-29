import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Rating, Button} from 'react-native-elements';

import Theme from '../../Style';

export default class CardInfor extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){

        const {opressFunc, produto} = this.props;

        return(
           <Fragment>

                <View style={styles.container} >


                    <View style={styles.head}>

                        <View style={styles.containerAvalicaoRating}>

                            <View>
                                <Text style={[styles.textHead, Theme.PrimaryColor]}>30 Avaliações</Text>
                            </View>

                            <View style={styles.avaliacao}>
                                                
                                <View style={{marginRight:10}}>
                                    <Rating
                                        imageSize={18}
                                        readonly
                                        ratingCount={5}
                                        startingValue={3.5}
                                        onFinishRating={this.ratingCompleted}
                                        style={{}}
                                    />
                                </View>

                                <View>
                                    <Text style={[styles.textEstrelas, Theme.PrimaryColor]}>3,5 de 5 estrelas</Text>
                                </View>

                            </View>

                        </View> 

                        <Button
                                                    
                            title="Avalia"
                            type="outline"
                            containerStyle={{}}
                            buttonStyle={{}}
                            onPress={()=>{return opressFunc(produto);}}

                        />
                                    
                    </View> 

                    <View style={styles.containerPorcentagem}>

                        <View style={styles.pocentagem}>
                            <Text style={styles.textPorcentagem}>55%</Text>
                        </View>

                        <View style={styles.containerTextPorcentagem}>
                            <Text style={[styles.textPorcCliente, Theme.PrimaryColor]}>dos Clientes Recomenda este produto</Text>
                        </View>

                    </View>


                </View>
           </Fragment> 
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        padding:10,
        borderRadius:8,
        backgroundColor:"#fff",
    },

    head:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    

    textHead:{
        fontSize:16,
    },

    textEstrelas:{
        fontSize:14,
    },

    avaliacao:{
        flexDirection:"row",
    },

    containerAvalicaoRating:{
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-between",
    },

    containerPorcentagem:{
        marginTop: 8,
        flexDirection:"row",
    },

    pocentagem:{
        width:60,
        height:45,
        borderRadius:8,
        marginRight:10,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0086ff",
    },

    textPorcentagem:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold",
    },

    containerTextPorcentagem:{
        justifyContent:"center",
    },
    textPorcCliente:{
        fontSize:15,
    }
});