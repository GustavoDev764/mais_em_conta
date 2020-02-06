import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Card, Divider} from 'react-native-elements';

import {Feather, FontAwesome} from '@expo/vector-icons';


const { width, height } = Dimensions.get('screen');

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

                <Divider style={{ backgroundColor: '#8e8e8ead' }} />

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