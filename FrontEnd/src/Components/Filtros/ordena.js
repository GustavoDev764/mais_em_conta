import React ,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, Slider} from 'react-native';



//import componentes
import Theme from '../../Style';
import styles from './style';


export default class Ordena extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            distancia:2.5,
        }
    }


    updateSlide = (value) => {

        var numero = value.toFixed(1);        
        this.setState({distancia: numero});
    }


    render(){

        const {distancia} = this.state;

        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={styles.headCard}>
                        <Text style={styles.titleProduto}>
                            Ordena
                        </Text>
                    </View>

                    <View style={styles.containerBodyCard} >

                        <View style={stylesOrdena.containerSlide}>
                            
                            <View style={stylesOrdena.containerTextTitleSlide}>
                                <Text style={stylesOrdena.textValueSlide}>Distancia de: {distancia} km</Text>
                            </View>

                            <View style={stylesOrdena.containerElementSlide}>
                                <Slider
                                    style={{width: "100%", height: 40}}
                                    minimumValue={2.5}
                                    maximumValue={10}
                                    onValueChange={(value)=>{ this.updateSlide(value);}}
                                    minimumTrackTintColor="red"
                                    maximumTrackTintColor="green"
                                />
                            </View>

                        </View>

                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Menores Preços</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Maiores Preços</Text>
                            </View>

                        </View>


                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Mais Vendidos</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Mais Avaliados</Text>
                            </View>

                        </View>
                                    
                    </View>
                </View>
            </Fragment>
        );
    }
}


const stylesOrdena = StyleSheet.create({

    containerSlide:{
        flexDirection:"column", 
        padding:0,
        marginLeft:15,
        marginRight:15
    },

    containerTextTitleSlide:{
        marginTop:2,
        marginBottom:2,
        marginLeft:10,
    },

    textValueSlide:{
        fontSize:16,
    },

    containerElementSlide:{
        marginTop:2,
        marginBottom:2,
    }

});