import React,{PureComponent} from 'react';

import {
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image,
        Dimensions,
} from 'react-native';

import {FontAwesome, Feather} from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from 'react-native-masked-text';


//import components
import Theme from '../../Style';
import InputText from '../../Components/EditarPerfil/input';
import BodyLogin from '../../Components/login/bodylogin';



const {height, width} = Dimensions.get("window");


export default class CadastroUsuario extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            date:"2016-05-15",
            cpf: null,
            data:null,
            phone:null,
        }
    }

    static navigationOptions = {
        //Drawer
        drawerLabel: "Login",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
              
    };

    //Navega por telas
    
    
    openRouteBack = (Screen) => {
        return this.props.navigation.navigate(Screen,
           {routeBack: "CadastroUsuario"} );
    }

    //Fim de Navegações


    render(){


        const {navigation} = this.props;

        var routeBack = navigation.getParam('routeBack');

        routeBack = routeBack != null ? routeBack : 'LoginScreen';

        return(
            <BodyLogin>
       
                <View style={styles.container}>

                    <View style={styles.containerLogo}>

                        <Image 
                            source={require("../../../assets/logo.png")} 
                            style={styles.logo}
                            resizeMode={"contain"}
                        />

                    </View>

                    <View style={styles.form}>

                        <View style={styles.containerInput}>

                            <InputText
                                nameInput = {null} 
                                inputStyle= {styles.input}
                            
                                placeholder = {"Nome"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>

                        <View style={styles.containerInputMask}>

                            <TextInputMask
                                type={'cpf'}
                                value={this.state.cpf}
                                style={styles.inputMask}
                                placeholder={"CPF"}
                                placeholderTextColor={Theme.PrimaryColor.color}
                                onChangeText={text => {
                                    this.setState({
                                        cpf: text
                                    })
                                }}
                            />

                        </View>

                        <View style={styles.containerInputMask}>

                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                value={this.state.data}
                                style={styles.inputMask}
                                placeholder={"Data de Nascimento"}
                                placeholderTextColor={Theme.PrimaryColor.color}
                                onChangeText={text => {
                                    this.setState({
                                        data: text
                                    })
                                }}
                            />

                        </View>

                        <View style={styles.containerInputMask}>

                            <TextInputMask
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) ',
                                }}
                                value={this.state.phone}
                                style={styles.inputMask}
                                placeholder={"Telefone"}
                                placeholderTextColor={Theme.PrimaryColor.color}
                                onChangeText={text => {
                                    this.setState({
                                        phone: text
                                    })
                                }}
                            />

                        </View>

                        <View style={styles.containerInput}>

                            <InputText
                                nameInput = {null} 
                                inputStyle= {styles.input}
                               
                                placeholder = {"Email"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>

                        <View style={styles.containerInput}>

                            <InputText
                                nameInput = {null} 
                                inputStyle= {styles.input}
                                
                                placeholder = {"Senha"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>

                        

                        <View style={styles.containerBotaoLogin}>
                            <TouchableOpacity
                                 style={styles.buttonLogin}
                                onPress={this.openTelaLogin}
                             >
                                <Text style={styles.textButton}>Cadastrar</Text>
                             </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.containerSocialMidia}>

                        <View style={styles.containerIconSocial}>
                            <SocialIcon
                                title={null}
                                button
                                onPress={()=>{alert("login com Facebook");}}
                                type='facebook'
                                style={styles.buttonSocialIcon}
                            />
                            <SocialIcon
                                title={null}
                                button
                                onPress={()=>{alert("login com Google");}}
                                type='google'
                                style={styles.buttonSocialIcon}
                            />
                        </View>

                        <TouchableOpacity 
                            onPress={()=>{this.openRouteBack(routeBack);}}
                            style={styles.containerCriaConta}>
                            <Text style={styles.textCriaConta}>Volta</Text>
                        </TouchableOpacity>

                    </View>


                </View>

              
            </BodyLogin>
        );
    }
}


const styles = StyleSheet.create({
 
    containerInputMask:{
       // borderWidth:1,
        marginTop:10,
        padding: 2,
        paddingLeft:9,
        paddingRight:9,
        backgroundColor:"#FFF",
        height:45,
        borderRadius:3,
    },

    inputMask:{
        color:Theme.PrimaryColor.color,
        borderBottomWidth:1,
        borderColor:Theme.PrimaryColor.color,
        paddingTop:2,
        paddingBottom:5,
        fontSize:18,
      
        
    },

    container:{
        //borderWidth:1,
        flex:1,
        marginTop:0,
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        
    },

    input:{
        color: Theme.PrimaryColor.color,
    },

    containerLogo:{
        width:150,
        height:150,
        //borderWidth:1,
    },

    logo:{
        width:"100%",
        height:"100%",
       
    },

    form:{
        //borderWidth:1,
        padding:2,
        paddingBottom:5,
        width:"100%",
        marginTop:10,
        //backgroundColor:"#00000070",
        //backgroundColor:"#FFF",
        borderRadius:3,
    },

    icon:{
        fontSize:20,
        marginRight:10,
        color: Theme.PrimaryColor.color,
       
    },
    containerInput:{
        marginTop:10,
        backgroundColor:"#FFF",
        borderRadius:3,
        //borderWidth:1,
    },

    recuperaSenhaForm:{
        //borderWidth:1,
        marginTop:10,
        width:"100%",
        alignItems:"flex-end",
        paddingRight:20,
    },

    textSenha:{
        color:Theme.PrimaryColor.color,
        fontSize:16,
    },

    containerBotaoLogin:{
        //borderWidth:1,
        marginTop:10,
        padding:2,
        paddingRight:0,
        paddingLeft:0,
        width:"100%",
        alignItems:"center",
    },
  
    buttonLogin:{
        //borderWidth:1,
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#EB0C38",
       
        borderRadius:3,
        zIndex:2,

    },

    textButton:{
        color:"#FFF",
        fontSize:18,
    },

    containerSocialMidia:{
        //borderWidth:1,
        marginTop:10,
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        //backgroundColor:"#00000070",
        //backgroundColor:"#FFF",
        borderRadius:3,
    },

    containerIconSocial:{
        flexDirection:"row",
        justifyContent:"center",
    },

    containerCriaConta:{
        marginTop:5,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
    },

    textCriaConta:{
        color:Theme.PrimaryColor.color,
        fontSize:16,
    },

    buttonSocialIcon:{
        width:120,
        borderRadius:5,
        height:50,
    },
});