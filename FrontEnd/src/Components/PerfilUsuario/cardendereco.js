import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';


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
                            <Text style={styles.titleCard}>Endereço</Text>
                        </View>

                        <TouchableOpacity onPress={()=>{openViewEditEnderecoUser(data)}} style={styles.containerIconHead}>
                            <FontAwesome name="edit" size={22} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bodyCard}>

                        <View style={styles.textRow}>
                            <Text style={styles.textTitle}>Endereço:</Text>
                            <Text style={styles.textBody}> {data.endereco} </Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.textTitle}>N° Casa:</Text>
                            <Text style={styles.textBody}>{data.ncasa}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.textTitle}>Bairro/Distrito:</Text>
                            <Text style={styles.textBody}>{data.bairrodistrito}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.textTitle}>CEP:</Text>
                            <Text style={styles.textBody}>{data.cep}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.textTitle}>Localidade/UF:</Text>
                            <Text style={styles.textBody}>{data.localidadeuf}</Text>
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