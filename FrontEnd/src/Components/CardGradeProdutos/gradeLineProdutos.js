import React from 'react';
import {View, Text} from 'react-native';
import Produto from './produto';
import {Divider} from 'react-native-elements';

export default class GradeLineProdutos extends React.Component{

    constructor(props){
        super(props);
    }

    renderProduto = (item,index) => {
        
        const isBorder = index == 0 ? true : false;
        return <Produto
                key      = {index}
                produto  = {item}
                isBorder = {isBorder}
        /> ;
        
    }

    render(){

        const { listProdutos } = this.props;
      
        
        return(
            <>
            <View style={{flexDirection:"row", justifyContent:"space-around", padding:2, borderWidth:0}}>
                
                {
                   listProdutos.map((item,index) =>{
                        return this.renderProduto(item,index);
                   }) 
                }
            </View>
            <Divider style={{ backgroundColor: '#8e8e8ead' }}/>   
            </>                       
        );
    }
}