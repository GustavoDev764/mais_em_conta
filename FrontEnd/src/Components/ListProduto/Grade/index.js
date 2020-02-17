import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Card, Divider, Button} from 'react-native-elements';

import GradeLineProdutos from './gradeLineProdutos';
import Theme from '../../../Style';

const { width, height } = Dimensions.get('screen');

export default class GradeProduto extends React.Component{

    constructor(props){
        super(props);
    }

    renderProdutos = (produtos) => {

      
        var total = produtos.length;
        var lista = [];

       

        //verifica se o total de produtos e par
        if( (total%2) == 0 ){
           
            var i = 0;
            for(i=0; i < total; i+=2){
                lista[i] = <GradeLineProdutos
                    key={i}
                    
                    openViewProduto = {this.props.openViewProduto}
                    listProdutos = {[ produtos[i], produtos[i+1] ]}
                />    
            }
        }else{

            //verifica so tem um produto na lista
            if(total == 1){
                lista[0] = <GradeLineProdutos
                            key={0}
                            
                            openViewProduto = {this.props.openViewProduto}
                            listProdutos = {[produtos[0]]}
                /> 
            }else{

                //percorrea a lista de produtos
                var i = 0;
                for(i=0; i < total; i+=2){

                    //verifica se existe o proximo para mando dois produto por linha
                    if( produtos[i+1] != undefined ) {
                        lista[i] = <GradeLineProdutos
                                    key={i}
                                   
                                    openViewProduto = {this.props.openViewProduto}
                                    listProdutos = {[ produtos[i], produtos[i+1] ]}
                                    /> 
                    }else{
                        
                        //nao existe o proximo entao manda so um produto
                        lista[i] = <GradeLineProdutos
                                    key={i}
                                    
                                    openViewProduto = {this.props.openViewProduto}
                                    listProdutos = {[ produtos[i] ]}
                                /> 
                    }
                       
                } 
            }
            
        }

        return lista;
    }

    render(){

        const {
            titleGrade,
            produtos,
            loadingMore,
            onFuncMore,
        } = this.props;

        return(
           
            <Card containerStyle={[styles.card, Theme.backgroundSetimo]}>

                {/* Head Card 1 */}
                <View style={styles.headCard}>
                    {/* <Text style={styles.textHeadCard}>{titleGrade}</Text> */}
                </View>
                {/* Head Card 1 */}

                <Divider style={styles.divider} />

                {/* Inicio do conteudo produtos */}
                <View style={styles.contentProduto}>
                                       
                    {
                       
                      this.renderProdutos(produtos)
                        
                    }

                                        
                
                </View>
                {/* Fim do Conteudo da Produtos */}

                

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

const styles = StyleSheet.create({

    divider:{
        backgroundColor: '#8e8e8ead',
    },

    card:{
        padding: 0,
        borderRadius:8,
        
    },

    headCard:{
        flexDirection:"row",
        padding:10,
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },

    textHeadCard:{
        fontSize:17,
        fontWeight:"bold",
        color:"#1b1b1b",
    },

    contentProduto:{
        flexDirection:"column",
    },

    footer:{
        flexDirection:"row",
        justifyContent:"center",
        padding:10,
        
    },
    
    moreButton:{
        width:"100%",
    }

});