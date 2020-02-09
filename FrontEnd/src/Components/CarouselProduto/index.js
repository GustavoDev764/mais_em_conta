import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Produto from '../CarouselProduto/produto';



//import Json
import {Listprodutos} from '../../utils/produtoList';


export default class CarouselProduto extends React.Component{

    constructor(props){
        super(props);
    }

    renderProdutos(item, index){

        
        return item.produtos.map((produto, index)=>{
            
            return <Produto
                    key     = {index}
                    produto = {produto}
                />

        });
        

    }


    render() {
      return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
            
        >

            {
                Listprodutos.map((item, index)=>{
                    return this.renderProdutos(item, index);
                })
            }
           
        </ScrollView>
      )
    };
}

const styles = StyleSheet.create({

    scrollView:{
        marginLeft:2,
        marginRight:2,
    }
})