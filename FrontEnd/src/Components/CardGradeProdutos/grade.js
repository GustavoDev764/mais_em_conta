import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons';
import {Card, Divider, Header, ListItem  } from 'react-native-elements';

import GradeLineProdutos from './gradeLineProdutos';

const { width, height } = Dimensions.get('screen');

export default class Grade extends React.Component{

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
                    listProdutos = {[ produtos[i], produtos[i+1] ]}
                />    
            }
        }else{

            //verifica so tem um produto na lista
            if(total == 1){
                lista[0] = <GradeLineProdutos
                            key={0}
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
                                    listProdutos = {[ produtos[i], produtos[i+1] ]}
                                    /> 
                    }else{
                        
                        //nao existe o proximo entao manda so um produto
                        lista[i] = <GradeLineProdutos
                                    key={i}
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
        } = this.props;

        return(
           
            <Card containerStyle={{padding: 0, borderRadius:8}}>

                {/* Head Card 1 */}
                <View style={{flexDirection:"row", padding:10, alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <Text style={{fontSize:17, fontWeight:"bold", color:"#1b1b1b"}}>{titleGrade}</Text>
                </View>
                {/* Head Card 1 */}

                <Divider style={{ backgroundColor: '#8e8e8ead' }} />

                {/* Inicio do conteudo produtos */}
                <View style={{flexDirection:"column"}}>
                                       
                    {
                       
                      this.renderProdutos(produtos)
                        
                    }

                                        
                
                </View>
                {/* Fim do Conteudo da Produtos */}

                

                {/* Footer Card 1 */}
                <TouchableOpacity onPress={()=>{alert("ver mais produto dessa categoria")}} style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                    <Text style={{color:"blue"}}>Ver Mais</Text>
                    <FontAwesome name="angle-right" color="blue" size={width * .06} />
                </TouchableOpacity>
                {/* Footer Card 1 */}

            </Card>
        );
    }
}