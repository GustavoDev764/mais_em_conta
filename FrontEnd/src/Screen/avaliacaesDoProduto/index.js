import React, {Fragment, PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Header, Rating} from 'react-native-elements';

//import coponents
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Body from '../../Components/Body';
import ComentProduto from '../../Components/ComentarioProduto';

export default class AvaliacaesDoProdutoScreen extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {navigation} = this.props;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");


        return(
            <Fragment>
                <View style={{flex:1}}>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Avaliações</Text>}
                            
                        containerStyle={{
                            backgroundColor: '#0086ff',
                            justifyContent: 'space-around',
                        }}
                    />

                    <Body>

                        <View style={{marginTop:0, padding:5,}}>

                            <View style={{
                                flexDirection:"column",
                                justifyContent:"flex-start",
                                alignItems:"flex-start",
                                padding:10,
                                borderRadius:8,
                                backgroundColor:"#fff"}}>


                                <View>
                                    <Text>30 Avaliações</Text>
                                </View> 

                                <View style={{
                                    marginTop: 8,
                                    flexDirection:"row",
                                    alignItems:"center",
                                  

                                    }}
                                >

                                    <View style={{marginRight:10}}>
                                        <Rating
                                            imageSize={18}
                                            readonly
                                            ratingCount={5}
                                            startingValue={3.5}
                                            onFinishRating={this.ratingCompleted}
                                            style={{}}
                                        />
                                    </View>

                                    <View>
                                        <Text>3,5 de 5 estrelas</Text>
                                    </View>
                                    
                                </View>

                                <View style={{marginTop: 8,flexDirection:"row"}}>

                                    <View style={{
                                            width:60,
                                            height:45,
                                            borderRadius:8,
                                            marginRight:10,
                                            alignContent:"center",
                                            alignItems:"center",
                                            justifyContent:"center",
                                            backgroundColor:"#0086ff",
                                            }}>
                                        <Text style={{color:"#FFF",fontSize:20, fontWeight:"bold"}}>55%</Text>
                                    </View>

                                    <View style={{justifyContent:"center"}}>
                                        <Text >dos Clientes Recomenda este produto</Text>
                                    </View>

                                </View>


                            </View>

                            {/* Fim Card 1 */}

                            {/* Inicio Card 2 */}

                            <View style={{
                                flexDirection:"column",
                                justifyContent:"flex-start",
                                alignItems:"flex-start",
                                padding:10,
                                borderRadius:8,
                                marginTop:21,
                                backgroundColor:"#fff"}}>


                                    <View>
                                        <Text>Detalhes da Avaliações</Text>
                                    </View>

                                    <View style={{marginTop: 8, flexDirection:"column", justifyContent:"center"}}>

                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            
                                            <View style={{ marginRight:10}}>
                                                <Rating
                                                    imageSize={18}
                                                    readonly
                                                    ratingCount={5}
                                                    startingValue={5}
                                                    onFinishRating={this.ratingCompleted}
                                                    style={{}}
                                                />
                                            </View>

                                            <View style={{}}>
                                                <Text>3 Pessoas</Text>
                                            </View>


                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            
                                            <View style={{ marginRight:10}}>
                                                <Rating
                                                    imageSize={18}
                                                    readonly
                                                    ratingCount={5}
                                                    startingValue={4}
                                                    onFinishRating={this.ratingCompleted}
                                                    style={{}}
                                                />
                                            </View>

                                            <View style={{}}>
                                                <Text>8 Pessoas</Text>
                                            </View>


                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            
                                            <View style={{ marginRight:10}}>
                                                <Rating
                                                    imageSize={18}
                                                    readonly
                                                    ratingCount={5}
                                                    startingValue={3}
                                                    onFinishRating={this.ratingCompleted}
                                                    style={{}}
                                                />
                                            </View>

                                            <View style={{}}>
                                                <Text>4 Pessoas</Text>
                                            </View>


                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            
                                            <View style={{ marginRight:10}}>
                                                <Rating
                                                    imageSize={18}
                                                    readonly
                                                    ratingCount={5}
                                                    startingValue={2}
                                                    onFinishRating={this.ratingCompleted}
                                                    style={{}}
                                                />
                                            </View>

                                            <View style={{}}>
                                                <Text>10 Pessoas</Text>
                                            </View>


                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            
                                            <View style={{ marginRight:10}}>
                                                <Rating
                                                    imageSize={18}
                                                    readonly
                                                    ratingCount={5}
                                                    startingValue={1}
                                                    onFinishRating={this.ratingCompleted}
                                                    style={{}}
                                                />
                                            </View>

                                            <View style={{}}>
                                                <Text>5 Pessoas</Text>
                                            </View>


                                        </View>



                                    </View>


                            </View>

                            {/* Fim Card 2 */}

                            <View style={{
                                flexDirection:"column",
                                justifyContent:"flex-start",
                                alignItems:"flex-start",
                                padding:10,
                                borderRadius:8,
                                marginTop:21,
                                backgroundColor:"#fff"}}> 


                                <View style={{}}>

                                    <ComentProduto />
                                    <ComentProduto />

                                </View>
                                

                                <View style={{
                                        backgroundColor:"#0086ff",
                                        width:"100%",
                                        padding:10,
                                        borderRadius:8,
                                        flexDirection:"column",
                                        alignSelf:"center",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        alignContent:"center",
                                    }}>

                                    <Text style={{fontSize:17, color:"#FFF"}}>
                                        Ver Mais
                                    </Text>

                                </View>

                            </View> 



                        </View>

                    </Body>
       

                </View>
            </Fragment>
        );
    }
}