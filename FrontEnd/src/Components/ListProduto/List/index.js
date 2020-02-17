import React,{memo} from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Card, Divider, Button} from 'react-native-elements';

import {Feather, FontAwesome} from '@expo/vector-icons';


const { width, height } = Dimensions.get('screen');

import Produto from './produto';

class ListProduto extends React.Component{

    constructor(props){
        super(props);
    }

    renderProduto = (item, index) => {
        return <Produto
                    openViewProduto = {this.props.openViewProduto}
                    key     = {index}
                    produto = {item}
                />
    }


    render(){

        const {produtos, onFuncMore, loadingMore} = this.props;

        return(

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
                        produtos.map((item, index)=>{
                            return this.renderProduto(item, index);
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
                        loading={loadingMore}
                        type="outline"
                        containerStyle={styles.moreButton}
                    />
                </View>
                {/* Footer Card 1 */}



            </Card>
        );
    }
}

export default memo(ListProduto);

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