import React, {PureComponent, Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Divider, Rating, Button, Image} from 'react-native-elements';
import {Ionicons, FontAwesome} from '@expo/vector-icons';


const logo   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEXmABb////lAADmAA/+8/TvfoPoLDbpOkH4xcjmABPznqL40dLmAAbmAArzo6bsYmj0r7L619n2trnpMTz97/D73uDqQ0v/+vv85efnGyfxkJTwio7tcHX5zM/ylpvtaG3rTlX3vcDueH33wsTnCh7oIy/vg4jsXWPqR08KbH2AAAADEklEQVR4nO3c3XKiMBiA4fKBP7Go+Au1ausW273/K9yiq80XiNLMzmhn3+ewnjDvUEIS4OEBAAAAAAAAAAAAAAAAAAAAAIB/T77h1sd6P6SftJVv6XYij1FrA7KdkC0I2YKQLQjZgpAtCNmCkC0I2YLIpH22EdlO0pdOa6/DWx/t/Ujbz+SpBgDANcYaWeNbH8wPUd1kjDujbLrbTbPVeka664zIeDrX84LHbVfE3PrI7pnINmmaUS067Fj5ybgxWiX5xQnnIYNLc/gN3RrJ6PLax4JuDaRzuVoUTbm+1cRP16pF0ZLlD5e8Xc/2xunmiLtOonxezHO3G1c3hx4P8sHsMLMq1xuVbZze+jjvjBRWncJIfDiv4s9Jg51txX+pogeE0rr0q9OQsVRL7ZNKbU4Nl9YvO7IpsrLidO0VDxNbv/TJpkhmj5f2L/GebH5mmJ6ouwyjgpLNZb6c//Y5kOrpPdkuMfFxQbz7kumVJLL5VMVMb73KNkVtkkC2ZkZk/74rarnIdokMVwtvMrI1G15e3SVbI5nNr1UjW428elLNyeY3nHmiPQvZvIzUh8+82D33REqyeamp/Kdk974cHh5jMGTzMqJmA5OP6kGQ4ySLbH7ph11tZD+5oBYwyaaoZY6NaqOWKcmmqBcTemo3VNZk8xFr1p7oNGovgWyKfW+2cLItyOah9gsK/6WNbIqxzza1lWD061hkU1S28VebWA2xZHOoC1ghfx9ZiKXUzzI49yb/PZnacYrlcSthpk81srnUzVk1mmaDUb9h+e2RbDYj9e2WJhOyKbL1psqt696cbIoR74r40r7CPfBcoOJb3U1m6kTkATeHLJsub5s0Vc9wRXyHzCFl/fsM1asvegoR8YkBRyxrtaGQD47LlTLof9n0eN3PJfJ7NDmMDckiG59f61NfZqBag2rbxZRlVYqHwr9HPeIGAD9X3B6XvbN4323tiW4nfL8tCF8LDEK2IGQLQrYgZAtCtiBkC0K2IGQLwiwhSNzttbZnTnrGCggAAAAAAAAAAAAAAAAAAAAA/Dt/ACawJkgeZLADAAAAAElFTkSuQmCC";


//components
import PreLoading from '../PreLoading';

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
            descricaoCurta,
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

                        <TouchableOpacity style={styles.buttonDenuncia} onPress={()=>{alert("ir para tela de denuncia")}}>
                            <Text style={styles.textDenuncia}>Denunciar Anúncio</Text>
                        </TouchableOpacity>

                        <View style={{ padding:2, flexDirection:"column"}}>
                            <View style={{ padding:2, flexDirection:"row"}}>

                                <View style={{ padding:2}}>
                                    <Image
                                        source={{ uri: logo }}
                                        style={{ width: 60, height: 60 }}
                                        PlaceholderContent={<PreLoading />}
                                    />
                                </View>

                                <View style={{ flexDirection:'column', justifyContent:"flex-start", marginLeft:2, padding:2}}>
                                    <Text>Lojas Americanas</Text>
                                    <Text style={styles.textInfor}>Rua São Mateus, 81 ° Isaura Parente</Text>
                                    
                                    <View style={{flexDirection:"row", alignItems:"center", alignContent:"center"}}>

                                        <View style={{width:60, alignItems:"center", borderRadius:3, backgroundColor:"#38ad27",}}>
                                            <Text style={{color:"#FFF"}}>Aberto</Text>
                                        </View>

                                        <Text style={{marginLeft:3, color:"#000"}}>08:00 - 21:00</Text>

                                        <Text style={{marginLeft:3, color:"#000"}}>° 12 km</Text>
                                       
                                        
                                    </View>

                                </View>

                            </View>

                        </View>


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
    },

    buttonDenuncia:{
        width:120,
    },

});