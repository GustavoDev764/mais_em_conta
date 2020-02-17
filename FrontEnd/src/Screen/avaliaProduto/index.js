import React, {Fragment, PureComponent} from 'react';

import {
        View,
        Text,
        KeyboardAvoidingView,
        TextInput,
        TouchableOpacity,
        StyleSheet
} from 'react-native';

import {
        Header,
        Image,
        AirbnbRating,
        Button
} from 'react-native-elements';

import RadioForm from 'react-native-simple-radio-button';


//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Body from '../../Components/Body';
import PreLoading from '../../Components/PreLoading';
import Theme from '../../Style';

const url = "https://images-americanas.b2w.io/produtos/01/00/img/24738/9/24738914P1.jpg";

export default class AvaliaProdutoScreen extends PureComponent{
    
    constructor(props){
        super(props);

        this.state = {
            descricao: '',
            titulo: '',
            radio:[
                {label: 'Não', value: 0 },
                {label: 'Sim', value: 1 }
            ],
        }
        

    }

    ratingCompleted(rating) {

        console.log("Rating is: " + rating);

    }

    render(){

        const {navigation} = this.props;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");

        const {

            id,
            title,
            valor,
            rating,
            descricao,
            descricaoCurta,
            principaImage,
            images,

        } = produto;

        return(
            <KeyboardAvoidingView 
                    style={{flex:1}}
                    behavior="padding"
            >
                <Fragment>
                    


                        <Header 
                            leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                            centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Avalia</Text>}
                                
                            containerStyle={[{
                               
                                justifyContent: 'space-around',
                            }, Theme.backgroundPrimaryColor]}
                        />

                        <Body>

                            <View style={styles.container} >

                                <View style={styles.head} >
                                    <Text style={styles.textHead}>
                                        Avalia este produto
                                    </Text>
                                </View> 

                                <View 
                                        onPress={()=>{alert("ir para tela produto");}} 
                                        style={styles.produtoContainer} >

                                    <View style={styles.imagecontainer} >
                                        <Image 
                                            PlaceholderContent={<PreLoading />} 
                                            source={{uri: principaImage}}
                                            style={styles.image}
                                        />

                                    </View>

                                    <View style={styles.textContainer} >

                                        <Text numberOfLines={7} style={styles.textDecricaoProduto} >
                                            {descricaoCurta}
                                        </Text>

                                    </View>
                                    
                                </View> 

                                <View style={styles.containerRating} >

                                    <AirbnbRating
                                        count={5}
                                        reviews={["Ruim", "Regular", "Bom", "Ótimo", "Excelente"]}
                                        defaultRating={1}
                                        size={55}
                                        onFinishRating={this.ratingCompleted}
                                    />     
                                
                                </View>  
                                
                                <View style={styles.containerRadio} >

                                    <View style={styles.containerTextRadio}>
                                        <Text style={styles.textTitleRadio}>
                                            Você recomenda esse produto?
                                        </Text>    
                                    </View>    
                                    
                                    <View style={{}}>

                                        <RadioForm
                                            radio_props={this.state.radio}
                                            formHorizontal={true}
                                            labelHorizontal={true}
                                            buttonColor={'#2196f3'}
                                            buttonStyle={{}}
                                            labelStyle={{fontSize:14, marginRight:10}}
                                            animation={true}
                                            initial={null}
                                            onPress={(value) => {}}
                                        />

                                    </View>
                                
                                </View>


                                <View style={styles.containerForm} >
                                    
                                    <View style={styles.form} >

                                        <View style={styles.containerTitleAvaliacao} >   

                                            <Text style={styles.tituloText} >
                                                Título da avaliação
                                            </Text>

                                            <TextInput 
                                                style={styles.inputTitle}
                                                maxLength={100}
                                                autoFocus={false}
                                                onChangeText={text => this.setState({titulo: text})}
                                                value={this.state.titulo}
                                                placeholder="Título da avaliação"
                                            />

                                        </View>  

                                        <View style={styles.containerDescricao}>

                                            <Text style={styles.textTitleDescricao} >
                                                Descrição
                                            </Text>

                                            <TextInput 
                                                style={styles.inputDescricao}
                                                multiline
                                                maxLength={100}
                                                autoFocus={false}
                                                onChangeText={text => this.setState({descricao: text})}
                                                value={this.state.descricao}
                                                placeholder="Descrição"
                                            />

                                        </View>
                                    
                                    </View>

                                </View>


                                <View style={styles.containerButton} >
                                    <Button
                                        containerStyle={{width:"100%"}}
                                        title="Salvar"
                                        type="outline"
                                        onPress={()=>{alert("salvar");}}
                                    />

                                </View>

                            
                            
                            
                            

                            </View>
                        </Body>
                        


                    
                </Fragment>

            </KeyboardAvoidingView>
            
            
        );
    }
}


const styles = StyleSheet.create({

   
   
    container:{
        flexDirection:"column",
        padding:10,
        //margin:10,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    head:{
        marginBottom:5,
        padding:1,
    },

    textHead:{
        fontSize:16,
    },

    produtoContainer:{
        flexDirection:"row", 
        marginBottom:5,
        alignContent:"center",
        padding:2,
        justifyContent:"space-between",
    },

    imagecontainer:{

    },

    image:{
        flex:1,
        width: 120,
        height: 120,
        resizeMode:"contain",
    },

    textContainer:{
        width:"62.5%",
        padding:2,
    },

    textDecricaoProduto:{
        textAlign:"left",
    },

    containerRating:{
        flexDirection:"row",
        marginBottom:5,
        justifyContent:"center",
    },

    containerRadio:{
        flexDirection:"column",
        marginBottom:5,
        alignItems:"center",
        padding:2,
    },

    containerTextRadio:{
        marginBottom:5,
    },
    
    textTitleRadio:{
        fontSize:14,
    },

    containerForm:{
        flexDirection:"column",
        marginBottom:5,
        alignItems:"center",
        padding:2,
    },

    form:{
        marginTop:5,
        width:"100%",
        padding:2,
    },

    containerTitleAvaliacao:{
        marginBottom:5,
    },

    tituloText:{
        marginBottom:5,
        fontSize:15,
    },

    inputTitle:{
        height:50,
        borderWidth: .5, 
        borderRadius:5,
        paddingLeft:10,
        paddingTop:0,
    },

    containerDescricao:{
        marginBottom:5,
    },

    textTitleDescricao:{
        marginBottom:5,
        fontSize:15,
    },

    inputDescricao:{
        height:120,
        borderWidth: .5, 
        borderRadius:5,
        paddingLeft:10,
        paddingTop:0,
    },

    containerButton:{
        flexDirection:"column",
        marginBottom:5,
        alignItems:"center",
        padding:2,
    }



});