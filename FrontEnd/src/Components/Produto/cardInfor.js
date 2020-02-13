import React, {PureComponent, Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Divider, Rating, Button} from 'react-native-elements';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

export default class CardInfor extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const { 
            produto,
            openViewDecricaoProduto,
            openViewInformaTecnicaProduto,
            openViewAvaliacaesDoProduto,
          

        } = this.props;

        const {

            id,
            title,
            valor,
            rating,
            descricao,
            principaImage,
            images,

        } = produto;

        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={styles.headCard}>
                        
                        <Text style={styles.titleProduto}>
                           {title}
                        </Text>

                                    

                        <View style={styles.inforProduto}>
                            <Text style={{}}>
                              Codigo: {id}
                            </Text>

                            <TouchableOpacity style={{}} onPress={()=>{return openViewAvaliacaesDoProduto(produto);}}>
                                <Rating
                                    imageSize={18}
                                    readonly
                                    ratingCount={5}
                                    startingValue={rating}
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

                        <Text style={styles.textPrice}>R$ {valor}</Text>
                        <Button
                            icon={
                                <Ionicons name="ios-list-box"
                                            
                                style={styles.iconList}
                                />
                            }
                            title="Adiciona a Lista"
                            type="solid"
                            containerStyle={styles.margin}
                            buttonStyle={styles.button}
                            onPress={()=>{alert("adiciona a lista");}}

                        />
                                    
                    </View>

                    <View style={[styles.margin, styles.containerButton]} >

                        <Button
                            title="Descrição"
                            type="outline"
                            containerStyle={styles.margin}
                            onPress={()=>{return openViewDecricaoProduto(produto);}}
                        />

                                    

                        <Button
                                        
                            title="Informação Técnicas"
                            type="outline"
                            containerStyle={styles.margin}
                            onPress={()=>{return openViewInformaTecnicaProduto(produto);}}
                                    
                        />
                                
                    </View>

                </View>
            </Fragment>
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