import React ,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';


//import componentes
import Theme from '../../Style';
import styles from './style';

export default class Lojas extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                                
                    <View style={[styles.headCard, Theme.PrimaryColor]}>
                        <Text style={[styles.titleProduto, Theme.PrimaryColor]}>
                            Lojas
                        </Text>
                    </View>

                    <View style={styles.containerBodyCard} >

                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={[styles.textElement, Theme.PrimaryColor]}>Americanas</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={[styles.textElement, Theme.PrimaryColor]}>Araujo</Text>
                            </View>

                        </View>


                        <View style={styles.containerLineElement}>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={[styles.textElement, Theme.PrimaryColor]}>Mercale</Text>
                            </View>

                            <View style={[styles.containerElement, Theme.borderColorPrimary]} >
                                <Text style={[styles.textElement, Theme.PrimaryColor]}>Gazin</Text>
                            </View>

                        </View>

                        <View style={[styles.footer, Theme.backgroundSecondaryColor]}>
                            <Text style={[styles.textfooter, ]}>Ver Todas as Lojas</Text>
                        </View>
                                   
                                    
                    </View>
                </View>
            </Fragment>
        );
    }
}
