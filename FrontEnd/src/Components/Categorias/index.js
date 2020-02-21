import React, {Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card, Divider, Button} from 'react-native-elements';


import Itemcategoria from './itemcategoria';

const { width, height } = Dimensions.get('screen');

export default class CategoriaList extends PureComponent{

    constructor(props){
        super(props);
    }


    renderCategoria = (item, index) => {
        return <Itemcategoria
                    key     = {index}
                    CategoriaData = {item}
                />
    }



    render(){

        const {CategoriaData, onFuncMore} = this.props;

        return(
            <Fragment>
                <Card containerStyle={styles.card}>

                    {/* Head Card List */}
                    <View style={styles.head}>
                        {/* <Text style={styles.headText} >Notebooks</Text> */}
                    </View>
                    {/* Head Card List */}

                    <Divider style={styles.divider} />

                    {/* Inicio lista Produto */}
                    <View style={styles.containerProduto}>

                        {
                            CategoriaData.map((item, index)=>{
                                return this.renderCategoria(item, index);
                            })
                        }
                        

                    </View>
                    {/* Fim lista Produto */}

                    <Divider style={styles.divider} />

                    {/* Footer Card 1 */}
                    <View style={styles.footer}>
                        <Button
                            onPress={onFuncMore}
                            title="Ver Mais"
                            type="outline"
                            containerStyle={styles.moreButton}
                        />
                    </View>
                    {/* Footer Card 1 */}

                    </Card>
            </Fragment>
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
        justifyContent:"center",
        padding:10,
        
    },

    textFooter:{
        color:"blue",
    },

    icon:{
        fontSize: width * .06, 
    },

    moreButton:{
        width:"100%",
    }
});