import React, {Fragment, PureComponent} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';


export default class CardFiltro extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {tipo, updateTipo} = this.props;

        return(
            <Fragment>
                <View style={styles.container} >
                                
                    <View style={styles.containerHead}>
                        <Text style={styles.textHead}>Filtros</Text>
                    </View>        

                
                    <View style={styles.containerPicker}>
                                            
                        <Picker 
                            selectedValue = {tipo}
                            onValueChange = {updateTipo}
                            style={{}}
                            itemStyle={{}} 
                        >
                            <Picker.Item 
                                label = "Avaliações mais recentes"
                                value = "recentes"
                                 
                            />

                            <Picker.Item 
                                label = "Avaliações mais antigas"
                                value = "antigas"
                            />

                            <Picker.Item 
                                label = "Avaliações mais positivas"
                                value = "positivas"
                            />

                            <Picker.Item 
                                label = "Avaliações mais negativas"
                                value = "negativas"
                            />
                        </Picker>

                    </View>

                </View>
            </Fragment>
        );
    }
    
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        padding:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    containerHead:{
        padding:10,
    },

    textHead:{
        fontSize:16,
    },

    containerPicker:{
        flex:1,
    }
});