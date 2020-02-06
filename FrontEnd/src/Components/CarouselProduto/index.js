import React from 'react';
import {ScrollView} from 'react-native';

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
                    key = {index}

                    id            = {produto.id}
                    title         = {produto.title} 
                    valor         = {produto.valor}
                    descricao     = {produto.descricao}
                    principaImage = {produto.principaImage}
                    images        = {produto.images}
                />

        });
        

    }


    render() {
      return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:2,marginRight:2,}}
            
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