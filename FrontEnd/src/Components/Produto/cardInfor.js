import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Divider, Rating, Button} from 'react-native-elements';
import {Icon} from 'native-base'

export default class CardInfor extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={styles.container}>
                            
                <View style={styles.headCard}>
                    
                    <Text style={styles.titleProduto}>
                        Computador Gamer Completo Com
                        Monitor Led Intel Core I5 8gb
                        Hd 500gb (nvidia Geforce Gt) Kit
                        Gamer Com Mousepad Easypc Light
                    </Text>

                                

                    <View style={styles.inforProduto}>
                        <Text style={{}}>
                                        Codigo: 85787784
                        </Text>

                        <TouchableOpacity style={{}} onPress={()=>{alert("ir para tela de avalia produto");}}>
                            <Rating
                                imageSize={18}
                                readonly
                                ratingCount={5}
                                startingValue={3}
                                onFinishRating={this.ratingCompleted}
                                style={{}}
                            />
                        </TouchableOpacity>
                                    
                    </View>

                    <TouchableOpacity onPress={()=>{alert("ir para tela de denuncia")}}>
                        <Text style={styles.textDenuncia}>Denunciar Anúncio</Text>
                    </TouchableOpacity>


                </View>

                <Divider style={[styles.margin, styles.divider]} />

                <View style={styles.containerPriceButton} >

                    <Text style={styles.textPrice}>R$ 1.574,32</Text>
                    <Button
                        icon={
                            <Icon name="md-list-box"
                                        
                            style={styles.iconList}
                            />
                        }
                        title="Adiciona a Lista"
                        type="solid"
                        containerStyle={styles.margin}
                        buttonStyle={styles.button}
                        onPress={()=>{alert("Adiciona o produto a lista")}}

                    />
                                
                </View>

                <View style={[styles.margin, styles.containerButton]} >

                    <Button
                        title="Descrição"
                        type="outline"
                        containerStyle={styles.margin}
                        onPress={()=>{alert("Ir para tela de Descrição")}}
                    />

                                

                    <Button
                                    
                        title="Informação Técnicas"
                        type="outline"
                        containerStyle={styles.margin}
                        onPress={()=>{alert("Ir para tela de Informação Técnicas")}}
                                   
                    />
                            
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({


    margin:{
        marginTop:8,
    },

    divider:{
        marginBottom:5,
    },

    container:{
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    headCard:{
        marginBottom:5,
    },

    titleProduto:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"left",
    },

    inforProduto:{
        marginTop:8,
        flexDirection:"row",
        justifyContent:"space-between",
    },

    textCodigoProduto:{
        fontSize:12,
        textAlign:"left",
    },

    textDenuncia:{
        fontSize:12,
        fontWeight:"bold",
        color:"red",
    },

    containerPriceButton:{
        flexDirection:"column",
        alignItems:"center",
        marginTop:8,
        marginBottom:5,
    },

    textPrice:{
        fontSize:30,
        fontWeight:"bold",
    },

    iconList:{
        marginRight:5,
        color:"#FFF",
        fontSize:20,
    },

    button:{
        backgroundColor:"red",
        padding:10,
    },

    containerButton:{
        marginBottom:5,
    }

});