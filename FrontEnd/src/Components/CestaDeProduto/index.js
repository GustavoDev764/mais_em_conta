import React, {Fragment, PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Image, Button, Icon} from 'react-native-elements';


const principaImage = 'https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_1GG.jpg';
const descricaoCurta =  'Computador Gamer Completo Com Monitor Led Intel Core I5 8gb Hd 500gb (nvidia Geforce Gt) Kit Gamer Com Mousepad Easypc Light.';
const logo   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEXmABb////lAADmAA/+8/TvfoPoLDbpOkH4xcjmABPznqL40dLmAAbmAArzo6bsYmj0r7L619n2trnpMTz97/D73uDqQ0v/+vv85efnGyfxkJTwio7tcHX5zM/ylpvtaG3rTlX3vcDueH33wsTnCh7oIy/vg4jsXWPqR08KbH2AAAADEklEQVR4nO3c3XKiMBiA4fKBP7Go+Au1ausW273/K9yiq80XiNLMzmhn3+ewnjDvUEIS4OEBAAAAAAAAAAAAAAAAAAAAAIB/T77h1sd6P6SftJVv6XYij1FrA7KdkC0I2YKQLQjZgpAtCNmCkC0I2YLIpH22EdlO0pdOa6/DWx/t/Ujbz+SpBgDANcYaWeNbH8wPUd1kjDujbLrbTbPVeka664zIeDrX84LHbVfE3PrI7pnINmmaUS067Fj5ybgxWiX5xQnnIYNLc/gN3RrJ6PLax4JuDaRzuVoUTbm+1cRP16pF0ZLlD5e8Xc/2xunmiLtOonxezHO3G1c3hx4P8sHsMLMq1xuVbZze+jjvjBRWncJIfDiv4s9Jg51txX+pogeE0rr0q9OQsVRL7ZNKbU4Nl9YvO7IpsrLidO0VDxNbv/TJpkhmj5f2L/GebH5mmJ6ouwyjgpLNZb6c//Y5kOrpPdkuMfFxQbz7kumVJLL5VMVMb73KNkVtkkC2ZkZk/74rarnIdokMVwtvMrI1G15e3SVbI5nNr1UjW428elLNyeY3nHmiPQvZvIzUh8+82D33REqyeamp/Kdk974cHh5jMGTzMqJmA5OP6kGQ4ySLbH7ph11tZD+5oBYwyaaoZY6NaqOWKcmmqBcTemo3VNZk8xFr1p7oNGovgWyKfW+2cLItyOah9gsK/6WNbIqxzza1lWD061hkU1S28VebWA2xZHOoC1ghfx9ZiKXUzzI49yb/PZnacYrlcSthpk81srnUzVk1mmaDUb9h+e2RbDYj9e2WJhOyKbL1psqt696cbIoR74r40r7CPfBcoOJb3U1m6kTkATeHLJsub5s0Vc9wRXyHzCFl/fsM1asvegoR8YkBRyxrtaGQD47LlTLof9n0eN3PJfJ7NDmMDckiG59f61NfZqBag2rbxZRlVYqHwr9HPeIGAD9X3B6XvbN4323tiW4nfL8tCF8LDEK2IGQLQrYgZAtCtiBkC0K2IGQLwiwhSNzttbZnTnrGCggAAAAAAAAAAAAAAAAAAAAA/Dt/ACawJkgeZLADAAAAAElFTkSuQmCC";



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
                                style={[styles.textHead, Theme.PrimaryColor]}>
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
                                    onPress={()=>{alert("remove item");}}
                                    title="Remove"
                                    type="outline"
                                />

                                <View style={styles.containerItemAdd} >

                                    <TouchableOpacity 
                                        onPress={()=>{alert("Remove");}}
                                        style={styles.continerIconMenos}
                                    >
                                        <Icon 
                                            name="remove"
                                            color="#FFF"
                                        />
                                       
                                    </TouchableOpacity>
                                    
                                    <View style={styles.containerTotalItem} >
                                        <Text 
                                            numberOfLines={3}
                                            style={[styles.textTotalItem, Theme.PrimaryColor]}>
                                            3
                                        </Text>
                                    </View>       

                                    <TouchableOpacity 
                                        onPress={()=>{alert("Adiciona");}}
                                        style={styles.containerIconAdd}
                                    >
                                        <Icon 
                                            name="add"
                                            color="#FFF"
                                        />
                                       
                                    </TouchableOpacity>
                                    

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