import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ItemAvaliacao from './itemavaliacao';
import Theme from '../../Style';

export default class DetalhesAvaliacao extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {data} = this.props;


        return(
            <Fragment>
                <View style={styles.container} >


                    <View style={styles.containerHead}>
                        <Text style={[styles.textHead, Theme.PrimaryColor]}>Detalhes da Avaliações</Text>
                    </View>

                    <View style={styles.body}>
                    
                    {
                        data.map((item, index)=>{
                            return <ItemAvaliacao 
                                        key    = {index}
                                        pessoa = {item.countPessoa} 
                                        rating = {item.rating}
                            />;
                        })
                    }

                    </View>


                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        padding:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    containerHead:{

    },

    textHead:{
        fontSize:16,
    },

    body:{
        width:"100%",
        marginTop: 8,
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
    }
});