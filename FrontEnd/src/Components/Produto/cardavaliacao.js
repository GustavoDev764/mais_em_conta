import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Rating, Button, Divider} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';


const {width, height} = Dimensions.get("screen");

//import componente
import ComentProduto from '../ComentarioProduto';

export default class CardAvaliacao extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(

            <View style={styles.container}>
                            
                <View style={styles.head}>
                                
                    <View style={styles.avalicaoRanting}>
                        <Text style={styles.textAvaliacao}>30 Avaliações</Text>
                        <TouchableOpacity style={{}} onPress={()=>{alert("ir para tela de avalia produto");}}>
                                <Rating
                                    imageSize={18}
                                    readonly
                                    ratingCount={5}
                                    startingValue={3}
                                    onFinishRating={this.ratingCompleted}
                                    style={styles.rating}
                                   
                                />
                        </TouchableOpacity>
                    </View>

                    <Button
                                    
                        title="Avaliar"
                        type="outline"
                        containerStyle={[styles.margin,]}
                        onPress={()=>{alert("Ir para tela de Avalia Produto")}}
                                   
                    />

                            
                </View>

                <Divider style={[styles.margin, styles.divider]} />

                <View style={[styles.margin, styles.body]}>
                                
                                
                    <View style={styles.comentContainer}>
                                    
                        <ComentProduto />

                        <ComentProduto />
      
                        <View style={styles.footerComenteAvalia}>

                                       
                            {/* Footer Card 1 */}
                            <TouchableOpacity onPress={()=>{alert("ver todo so comentarios")}} style={styles.footer}>
                                <Text style={styles.textFooter}>Ver Todos</Text>
                                <FontAwesome name="angle-right" color="blue" size={width * .06} />
                            </TouchableOpacity>
                            {/* Footer Card 1 */} 

                        </View>

                    </View> 

                </View>
                            
            </View> 
        );
    }
}

const styles = StyleSheet.create({


    margin:{
        marginTop:8,
    },

    container:{
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    head:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    avalicaoRanting:{
        flexDirection:"column",
        justifyContent:"space-between",
    },

    textAvaliacao:{
        fontSize:15,
        fontWeight:"bold",
    },

    rating:{
        paddingVertical: 10,
    },

    divider:{
        marginBottom:5,
    },

    body:{
        flexDirection:"row",
    },

    comentContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",
    },

    footerComenteAvalia:{
        width:"100%",
    },

    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    textFooter:{
        color:"blue",
    }

});