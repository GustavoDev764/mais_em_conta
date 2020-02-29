import React ,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import componentes
import Theme from '../../Style';

export default class TipoDeBuscar extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={styles.headCard}>
                        <Text style={[styles.titleProduto, Theme.PrimaryColor]}>
                            Tipo de Buscar
                        </Text>
                    </View>

                    <View style={styles.containerBodyCard} >

                        <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                            <Text style={[styles.textElement, Theme.PrimaryColor]}>Produtos</Text>
                        </View>

                        <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                            <Text style={[styles.textElement, Theme.PrimaryColor]}>Lojas</Text>
                        </View>

                        <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                            <Text style={[styles.textElement, Theme.PrimaryColor]}>Serviços</Text>
                        </View>
                                   
                                    
                    </View>
                </View>
            </Fragment>
        );
    }
}


const styles = StyleSheet.create({

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

    containerBodyCard:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    containerElement:{
        borderWidth:.6,
        padding:10,
   
        borderRadius:3,

    },

    textElement:{
        color:"#000",
        fontSize:16,
    }

});
