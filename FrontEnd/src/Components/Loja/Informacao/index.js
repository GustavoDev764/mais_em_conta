import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Divider} from 'react-native-elements';

//importa Json
import {HorariosData} from '../../../utils/hoararios';


//import Compontes
import Horarios from './horario';

export default class InformacaoLoja extends PureComponent{

    constructor(props){
        super(props);
    }


    renderHorarios = (item, index) => {
        return <Horarios
                key = {index}
                item = {item}    
            />;
    }


    render(){
        return(
            <Fragment>

                <Card containerStyle={styles.card}>

            
                {/* Inicio lista Produto */}
                <View style={styles.containerProduto}>

                    <View
                        style={styles.container}
                    >
                        <Text style={styles.titleInfor}>Endereço</Text>
                        <Text style={styles.textInfor}>Rua São Mateus, 81 ° Isaura Parente</Text>
                    </View>


                    {
                        HorariosData.map((item, index)=>{
                            return this.renderHorarios(item, index);
                        })
                    }

                </View>
                {/* Fim lista Produto */}

                </Card>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        padding:10,
        flexDirection:"column",
        alignItems:"flex-start",
    },

    titleInfor:{
        fontSize:16,
        fontWeight:"bold",
    },

    textInfor:{
        fontSize:15,

    },

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


});