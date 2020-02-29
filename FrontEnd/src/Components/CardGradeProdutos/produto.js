import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { Rating, Image} from 'react-native-elements';

//import components
import PreLoading from '../PreLoading';
import Theme from '../../Style';

export default class Produto extends React.Component{

    constructor(props){
        super(props);
    }


    // openViewProduto(produto, navigation){
    //     return navigation.navigate("Produto",{routeBack:"HomeScreen", produto:produto});
    // }


    

    render(){

        const { isBorder, produto} = this.props;

        const {

            id,
            title,
            valor,
            valorAnterio,
            rating,
            descricaoCurta,
            principaImage,
            images,

        } = produto;
       
        var valorArray = valor.split(',');

        return(

            <TouchableOpacity 
                    onPress={()=>{return this.props.openViewProduto(produto);}}
                    style={{

                        flex:1,
                        margin:3,
                        borderColor:"#8e8e8ead",
                        
                        paddingLeft: !isBorder ? 4 : 0,
                        paddingRight: isBorder ? 4 : 0,
                        
                        borderRightWidth:isBorder ? .8 : 0,
                        borderLeftWidth: !isBorder ? .8 : 0,
                    
                    }}> 

                                           
                <View style={styles.imageContainer}>
                    <View style={styles.bodyimageContainer}>
                        <Image 
                            PlaceholderContent={<PreLoading />} 
                            source={{uri: principaImage}}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.containerTextExpira}>
                        <Text style={styles.textExpira}>Expira em 2 dias</Text>
                    </View>

                </View>

                <View style={styles.textContainer}>
                    
                    <View style={{}}>
                        <Text style={[styles.textValorAnterio, Theme.TertiaryColor]}>
                            R$ {valorAnterio}
                        </Text>
                    </View>
                    
                    <View style={styles.priceRatingContainer}>
                        
                        <Text style={[styles.textCoin, Theme.PrimaryColor]}>R$</Text>
                        
                        <View style={styles.priceCentsContainer}>
                            <Text style={[styles.priceCoin, Theme.PrimaryColor]}>{valorArray[0]}</Text>
                            { ( parseFloat(valorArray[1]) > 0 ) ? 
                                
                                <Text numberOfLines={1} style={[styles.textCents, Theme.PrimaryColor]}>,{valorArray[1]} </Text>
                                
                                : null}
                            
                        </View>
                    </View>

                    <View style={[styles.margin, ]}>
                        <Rating
                            imageSize={15}
                            readonly
                            ratingCount={5}
                            startingValue={rating}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10 }}
                            style={{}}
                        />
                    </View>

                    

                </View>

                <View style={[styles.margin, styles.descriptionContainer]}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.description, Theme.QuatroColor]}>
                       {descricaoCurta}
                    </Text>
                </View>
                                            
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    margin:{
        marginTop:5,
    },

    imageContainer:{
        height:130,
    },

    bodyimageContainer:{
        flex:1,
        alignItems:"center"
    },

    image:{
        flex:1,
        width: 120,
        height: 120,
        resizeMode:"contain",
    },

    textContainer:{
        flexDirection:"column",
        alignItems:"flex-start",
        padding:2,
        marginLeft: 0,
        marginTop:5,
    },

    priceRatingContainer:{
        flexDirection:"row", 
    },

    textCoin:{
        fontSize:17,
        fontWeight:"bold",
    },

    priceCentsContainer:{
        flexDirection:"row",
    },

    priceCoin:{
        fontSize:17,
        fontWeight:"bold",
        marginLeft:5,
    },

    textCents:{
        fontSize:13,
        fontWeight:"bold",
        marginLeft:1,
    },

    descriptionContainer:{
        alignItems:"flex-start",
        
    },

    description:{
        textAlign:"left",
        fontSize:12,
    },

    textValorAnterio:{
        fontSize:13,
        textDecorationLine:"line-through",
    },

    containerTextExpira:{
        position:"absolute",
        bottom:0,
    },

    textExpira:{
        fontSize:11,
        color:"red"
    }

});