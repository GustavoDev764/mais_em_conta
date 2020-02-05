import React from 'react';
import {View, Text} from 'react-native';
import {Card, Divider} from 'react-native-elements';

import Produto from './produto';

export default class List extends React.Component{

    constructor(props){
        super(props);
    }

    renderProduto = (item, index) => {
        return <Produto
                    key = {index}

                    id            = {item.id}
                    title         = {item.title} 
                    valor         = {item.valor}
                    descricao     = {item.descricao}
                    principaImage = {item.principaImage}
                    images        = {item.images}
                />
    }


    render(){

        const {produtos} = this.props;

        return(

            <Card containerStyle={{padding: 0, borderRadius:8}}>

                {/* Head Card List */}
                <View style={{flexDirection:"row", padding:10, alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <Text style={{fontSize:17, fontWeight:"bold", color:"#1b1b1b"}}>Notebooks</Text>
                </View>
                {/* Head Card List */}

                <Divider style={{ backgroundColor: '#8e8e8ead' }} />

                {/* Inicio lista Produto */}
                <View style={{flexDirection:"column"}}>

                    {
                        produtos.map((item, index)=>{
                            return this.renderProduto(item, index);
                        })
                    }
                    

                </View>
                {/* Fim lista Produto */}



            </Card>
        );
    }
}