import React, {PureComponent, Fragment} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Rating} from 'react-native-elements';

//components
import PreLoading from '../PreLoading';

export default class Produto extends PureComponent{
    
    constructor(props){
        super(props);
    }

    //Navegação por telas

    //Fim de Navegações

    render(){
        
        const { produto, openViewProdutoTrocaData } = this.props;

        const {

            id,
            title,
            valor,
            rating,
            descricaoCurta,
            principaImage,
            images,

        } = produto;

        var valorArray = valor.split(',');

        return(
            <Fragment>
                <TouchableOpacity onPress={()=>{return openViewProdutoTrocaData(produto) }} style={styles.container} >
                    
                    <View style={styles.head}>
                        <Image
                    
                        source={{ uri: principaImage }}
                        style={styles.image}
                        PlaceholderContent={<PreLoading />}
                        />
                    </View>

                    <View style={styles.containerPriceRating}>

                        <View style={styles.containerPrice}>
                            <Text style={styles.priceCoin}>R$ {valorArray[0]}</Text>
                            {
                                ( parseFloat(valorArray[1]) > 0 ) ? 
                                <Text style={styles.centsCoin}>,{valorArray[1]}</Text>
                                : null
                            }
                            
                        </View>

                        <View style={styles.containerRating}>
                            <Rating
                                imageSize={18}
                                readonly
                                ratingCount={5}
                                startingValue={rating}
                                onFinishRating={this.ratingCompleted}
                                style={styles.rating}
                                
                            />
                        </View>

                    </View>

                    <View style={styles.containerText}>
                        <Text 
                            numberOfLines={3}
                            ellipsizeMode="tail"
                            style={styles.text}>

                        {descricaoCurta}

                        </Text>   
                    </View>



                    
                </TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        alignItems:"flex-start",
        marginRight:5,
        marginBottom:10,
        //backgroundColor:"#FFF",
        
        borderWidth: 0,
        shadowColor:"#ccc",
        shadowOffset: {width :  0 , height :  2 },
        shadowOpacity: .2,
        
       // shadowRadius:2,
        elevation: 1,
        // shadowColor :  ' # 000 ' ,
        // shadowOffset : {width :  0 , height :  2 },
        // shadowOpacity :  0.8 ,
        // shadowRadius :  2 ,
        // elevação :  1 ,
        
        padding:1,
        width:168,
        height:"100%",
    },

    head:{
        padding:1, 
    },

    image:{
        width: 160,
        height:160,
        resizeMode:"contain", 
    },

    containerPriceRating:{
        padding:2,
        marginTop:5,
        marginLeft:2, 
    },
    
    containerPrice:{
        flexDirection:"row",
    },

    priceCoin:{
        fontSize:17,
        fontWeight:"bold",
        color:"#2f2f2f",
    },

    centsCoin:{
        fontSize:13,
        fontWeight:"bold",
        color:"#2f2f2f",
    },

    containerRating:{
        alignItems:"flex-start",
        marginTop:5,
        marginBottom:2,
    },

    rating:{
       
    },

    containerText:{
        padding:2, 
        marginTop:0,
        marginLeft:2,
        
    },
    text:{
        fontSize:12,
    }


});