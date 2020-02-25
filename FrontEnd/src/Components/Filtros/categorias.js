import React ,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';


//import componentes
import Theme from '../../Style';
import styles from './style';


export default class Categorias extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={styles.headCard}>
                        <Text style={styles.titleProduto}>
                            Categorias
                        </Text>
                    </View>

                    <View style={styles.containerBodyCard} >

                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Celulares e Smartphones</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Informatica e Acessórios</Text>
                            </View>

                        </View>


                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Telefonia Fixa</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={styles.textElement}>Cameras e Filmadoras</Text>
                            </View>

                        </View>

                        <View style={[styles.footer, Theme.backgroundSecondaryColor]}>
                            <Text style={styles.textfooter}>Ver Todas as Categorias</Text>
                        </View>
                                   
                                    
                    </View>
                </View>
            </Fragment>
        );
    }
}
