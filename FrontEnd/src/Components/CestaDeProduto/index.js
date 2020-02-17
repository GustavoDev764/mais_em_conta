import React, {Fragment, PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Image, Button, Icon} from 'react-native-elements';


const principaImage = 'https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_1GG.jpg';
const descricaoCurta =  'Computador Gamer Completo Com Monitor Led Intel Core I5 8gb Hd 500gb (nvidia Geforce Gt) Kit Gamer Com Mousepad Easypc Light.';

//import components
import PreLoading from '../PreLoading';
import DetalhesItem from './detalhesitem';
import Theme from '../../Style';


export default class CardCestaProduto extends PureComponent{

    constructor(props){
        super(props);
    }


    render() {
      return (
        <Fragment>

                <View style={styles.container}>
                        <View style={styles.textHeadContainer}>
                                                
                            <Text 
                                numberOfLines={3}
                                style={styles.textHead}>
                                    {descricaoCurta}
                             </Text>
                                                        
                        </View>


                        <View style={styles.body} >

                            <View style={styles.imageContainer}>
                                <View style={styles.imagebody}>
                                    <Image  
                                        source={{uri: principaImage}}
                                        style={styles.image} 
                                        PlaceholderContent={<PreLoading />} 
                                    />
                                </View>
                            </View>


                            <View style={styles.inforCompraProduto}>

                                <DetalhesItem 
                                    index = {"Desconto Boleto"}
                                    value = {"999,90"}
                                    
                                />

                                <DetalhesItem 
                                    index = {"Parcelado cartao"}
                                    value = {"1176,35"}
                                    
                                />

                                <DetalhesItem 
                                    index = {"Desconto Cupom"}
                                    value = {"0,00"}
                                    
                                />

                                <DetalhesItem 
                                    index = {"Subtotal"}
                                    value = {"999,90"}
                                    destaque = {true}
                                    
                                />

                            </View>

                        </View>

                        <View style={styles.footer}>

                                
                                <Button
                                    title="Remove"
                                    type="outline"
                                />

                                <View style={styles.containerItemAdd} >
                                    <View style={styles.continerIconMenos} >
                                        <Icon 
                                            name="remove"
                                            color="#FFF"
                                        />
                                       
                                    </View>
                                    
                                    <View style={styles.containerTotalItem} >
                                        <Text 
                                            numberOfLines={3}
                                            style={styles.textTotalItem}>
                                            3
                                        </Text>
                                    </View>       

                                    <View style={styles.containerIconAdd} >
                                        <Icon 
                                            name="add"
                                            color="#FFF"
                                        />
                                       
                                    </View>
                                    

                                </View>
                                
                                
                        </View>
                </View>

        </Fragment>
      )
    };
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
       // borderWidth:1,
        padding:10,
        marginBottom:3,
        marginLeft:10,
        marginRight:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    textHeadContainer:{
        marginBottom:2,
    },

    textHead:{
        fontSize:14,
        fontWeight:"bold"
    },  

    body:{
        flexDirection:"row",
        width:"100%",
       // borderWidth:1,
        padding: 2,
    },

    imageContainer:{
       // borderWidth:1,
        height:"100%",
        width:"35%", 
        padding:1,
    },

    imagebody:{
        flex:1, 
        alignItems:"center",
       
        
    },

    image:{
        flex:1,
        width:90,
        height:90,
        resizeMode:"contain",
        
    },

    inforCompraProduto:{
        flexDirection:"column",
        marginBottom:2,
       // borderWidth:1,
        width:"64.5%",
        height:"100%",
        padding: 1,
        marginLeft:2,
    },

    footer:{
        marginTop:2,
        padding: 2,
       // borderWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },

    containerItemAdd:{
        flexDirection:"row",
    },

    contianerItemProduto:{
        flexDirection:"row",
    },

    containerTotalItem:{
       // borderWidth:1,
        alignSelf:"center",
    },

    continerIconMenos:{
       // borderWidth:1,
        backgroundColor:"red",
        marginRight:3,
        padding: 2,
        width:30,
        height:30,
        alignItems:"center",
        borderRadius:3,
    },

    icon:{
        color:"#FFF",
    },

    textTotalItemContainer:{
       // borderWidth:1,
        alignSelf:"center",
    },

    textTotalItem:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:20,
        marginRight:20,
    },

    containerIconAdd:{
        //borderWidth:1,
        backgroundColor:"red",
        marginLeft:3,
        padding: 2,
        width:30,
        height:30,
        alignItems:"center",
        borderRadius:3,
    }

});