import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Card, Divider} from 'react-native-elements';

import {Feather, FontAwesome} from '@expo/vector-icons';


const { width, height } = Dimensions.get('screen');

import Produto from './produto';

export default class List extends React.Component{

    constructor(props){
        super(props);
    }

    renderProduto = (item, index) => {
        return <Produto
                    key     = {index}
                    produto = {item}
                />
    }


    render(){

        const {produtos} = this.props;

        return(

            <Card containerStyle={styles.card}>

                {/* Head Card List */}
                <View style={styles.head}>
                    <Text style={styles.headText} >Notebooks</Text>
                </View>
                {/* Head Card List */}

                <Divider style={styles.divider} />

                {/* Inicio lista Produto */}
                <View style={styles.containerProduto}>

                    {
                        produtos.map((item, index)=>{
                            return this.renderProduto(item, index);
                        })
                    }
                    

                </View>
                {/* Fim lista Produto */}

                <Divider style={styles.divider} />

                {/* Footer Card 1 */}
                <TouchableOpacity onPress={()=>{alert("ver mais produto dessa categoria")}} style={styles.footer}>
                    <Text style={styles.textFooter}>Ver Mais</Text>
                    <FontAwesome name="angle-right" style={styles.icon}  color="blue" />
                </TouchableOpacity>
                {/* Footer Card 1 */}



            </Card>
        );
    }
}

const styles = StyleSheet.create({

    card:{
        padding: 0,
        borderRadius:8,
    },

    head:{
        flexDirection:"row", 
        padding:10,
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },

    headText:{
        fontSize:17,
        fontWeight:"bold",
        color:"#1b1b1b",
    },

    containerProduto:{
        flexDirection:"column",
    },

    divider:{
        backgroundColor: '#8e8e8ead',
    },

    footer:{
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between",
    },

    textFooter:{
        color:"blue",
    },

    icon:{
        fontSize: width * .06, 
    }
});