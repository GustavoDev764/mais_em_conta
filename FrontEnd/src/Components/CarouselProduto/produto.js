import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image, Rating} from 'react-native-elements';

//components
import PreLoading from '../PreLoading';

export default class Produto extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        
        const { produto } = this.props;

        const {

            id,
            title,
            valor,
            rating,
            descricao,
            principaImage,
            images,

        } = produto;

        var valorArray = valor.split(',');

        return(
            <View style={styles.container} >
                
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

                     {descricao}

                    </Text>   
                </View>



                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        alignItems:"flex-start",
        marginRight:5,
        marginBottom:10,
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
        marginBottom:5,
    },

    rating:{
        paddingVertical: 10,
    },

    containerText:{
        padding:2, 
        marginTop:5,
        marginLeft:2
    },
    text:{
        fontSize:12,
    }


});