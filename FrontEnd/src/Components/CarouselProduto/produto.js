import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Image, Rating} from 'react-native-elements';



const url = 'https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_1GG.jpg';

const descricao = 'Computador Gamer EasyPC Light - Seus jogos prediletos em um Pc com preço justoEssa linha foi criada para você que quer começar a jogar agora, mas tem uma limitação no orçamento para investir no seu Pc Gamer.';



export default class Produto extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){

        const {

            id,
            title,
            valor,
            descricao,
            principaImage,
            images,

        } = this.props;

        var valorArray = valor.split(',');

        return(
            <View style={{
               
                        flexDirection:"column",
                        alignItems:"flex-start",
                        
                        marginRight:5,
                        marginBottom:10,
                        
                        padding:0,
                        width:165,
                        height:"100%",
                    
                    }}
                
            >
                
                <View style={{marginTop:5, marginLeft:2,}}>
                    <Image
                
                    source={{ uri: principaImage }}
                    style={{ width: 165, height:165, resizeMode:"contain" }}
                    PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

                <View style={{marginTop:5, marginLeft:2, }}>

                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$ {valorArray[0]}</Text>
                        {
                            ( parseFloat(valorArray[1]) > 0 ) ? 
                            <Text style={{fontSize:13, fontWeight:"bold", color:"#2f2f2f"}}>,{valorArray[1]}</Text>
                            : null
                        }
                        
                    </View>

                    <View style={{marginTop:5,marginBottom:5}}>
                        <Rating
                            imageSize={18}
                            readonly
                            ratingCount={5}
                            startingValue={4.5}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10 }}
                            style={{}}
                        />
                    </View>

                </View>

                <View style={{marginTop:5, marginLeft:2, }}>
                    <Text 
                        numberOfLines={3}
                        ellipsizeMode="tail"
                         style={{
                                fontSize:12,
                                
                            }}>

                     {descricao}

                    </Text>   
                </View>



                
            </View>
        );
    }
}