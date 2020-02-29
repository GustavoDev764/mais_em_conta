import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';


import Theme from '../../Style';

export default class CardEndereco extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){

        const {
            data,
            openViewEditEnderecoUser,
        } = this.props;

        return(
            <Fragment>

                <View style={styles.containerCard}>

                    <View style={styles.headCard}>

                        <View style={styles.containerNameHead}>
                            <Text style={[styles.titleCard, Theme.PrimaryColor]}>Endereço</Text>
                        </View>

                        <TouchableOpacity onPress={()=>{openViewEditEnderecoUser(data)}} style={styles.containerIconHead}>
                            <FontAwesome name="edit" style={[Theme.iconSizeX1, Theme.PrimaryColor]} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bodyCard}>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Endereço:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}> {data.endereco} </Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>N° Casa:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}>{data.ncasa}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Bairro/Distrito:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}>{data.bairrodistrito}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>CEP:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}>{data.cep}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={[styles.textTitle, Theme.PrimaryColor]}>Localidade/UF:</Text>
                            <Text style={[styles.textBody, Theme.PrimaryColor]}>{data.localidadeuf}</Text>
                        </View>
                        
                    

                    </View>

                </View>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    containerCard:{
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
        flexDirection:"column",
        
    },

    headCard:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:.4,
        marginBottom:10,

    },

    titleCard:{
        fontSize:16,
        fontWeight:"bold",
        
    },

    containerNameHead:{
       // borderWidth:1,
        padding:2,
    },

    containerIconHead:{
       // borderWidth:1,
        padding:2,
    },

    bodyCard:{
        flexDirection:"column",

    },

    textRow:{
        flexDirection:"row",
        alignItems:"flex-start",
        alignContent:"center",
    },

    textTitle:{
        fontSize:15,
        fontWeight:"bold",
        marginRight:5,
    },

    textBody:{
        fontSize:15,

    }

});