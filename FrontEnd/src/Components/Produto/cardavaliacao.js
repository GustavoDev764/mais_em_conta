import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Rating, Button, Divider} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';


const {width, height} = Dimensions.get("screen");

//import componente
import ComentProduto from '../ComentarioProduto';

export default class CardAvaliacao extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
<View style={{marginBottom:15, padding:10, borderRadius:8, backgroundColor:"#FFF"}}>
                            
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                
                                <View style={{flexDirection:"column", justifyContent:"space-between"}}>
                                    <Text style={{fontSize:15, fontWeight:"bold"}}>30 Avaliações</Text>
                                    <TouchableOpacity style={{}} onPress={()=>{alert("ir para tela de avalia produto");}}>
                                            <Rating
                                                imageSize={18}
                                                readonly
                                                ratingCount={5}
                                                startingValue={3}
                                                onFinishRating={this.ratingCompleted}
                                                style={{ paddingVertical: 10 }}
                                                style={{}}
                                            />
                                    </TouchableOpacity>
                                </View>

                                <Button
                                    
                                    title="Avaliar"
                                    type="outline"
                                    containerStyle={{marginTop:8,}}
                                    onPress={()=>{alert("Ir para tela de Avalia Produto")}}
                                   
                                />

                            
                            </View>

                            <Divider style={{marginTop:8, marginBottom:5,}} />

                            <View style={{marginTop:8, flexDirection:"row"}}>
                                
                                
                                <View style={{flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}}>
                                    
                                    <ComentProduto />

                                    <ComentProduto />
      
                                    <View style={{width:"100%"}}>

                                       
                                        {/* Footer Card 1 */}
                                        <TouchableOpacity onPress={()=>{alert("ver todo so comentarios")}} style={{flexDirection:"row", justifyContent:"space-between"}}>
                                            <Text style={{color:"blue"}}>Ver Todos</Text>
                                            <FontAwesome name="angle-right" color="blue" size={width * .06} />
                                        </TouchableOpacity>
                                        {/* Footer Card 1 */} 

                                    </View>

                                </View> 
                            </View>
                            
                        </View> 
        );
    }
}