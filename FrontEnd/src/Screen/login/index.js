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
import { createStackNavigator } from 'react-navigation-stack';

//import components
import InputText from '../../Components/EditarPerfil/input';
import BodyLogin from '../../Components/login/bodylogin';
import Theme from '../../Style';


const {height, width} = Dimensions.get("window");

//import Rotas
import CadastroUsuario from '../cadastroUsuario';
import RecuperaSenhaScreen from '../recuperaSenha';

export default class LoginScreen extends PureComponent{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        //Drawer
        drawerLabel: "Login",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
              
    };

    //Navega por telas
    
    
    openTelaCadastroUsuario = () => {
        return this.props.navigation.navigate("CadastroUsuario",
           {routeBack: "LoginScreen"} );
    }

    openTelaRecuperaSenha = () => {
        return this.props.navigation.navigate("RecuperaSenhaScreen",
           {routeBack: "LoginScreen"} );
    }

    //Fim de Navegações


    render(){
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
                                placeholderTextColor = {Theme.PrimaryColor.color}
                                leftIcon  = {<FontAwesome name={"user"} style={styles.icon} />}
                                placeholder = {"Email"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>

                        <View style={styles.containerInput}>

                            <InputText
                                nameInput = {null} 
                                inputStyle= {styles.input}
                                placeholderTextColor = {Theme.PrimaryColor.color}
                                leftIcon  = {<FontAwesome name={"lock"} style={styles.icon} />}
                                placeholder = {"Senha"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>

                        <TouchableOpacity onPress={this.openTelaRecuperaSenha} style={styles.recuperaSenhaForm}>
                            <Text style={styles.textSenha}>Esqueci a senha</Text>
                        </TouchableOpacity>

                        <View style={styles.containerBotaoLogin}>
                            <TouchableOpacity
                                 style={styles.buttonLogin}
                                onPress={()=>{alert("fazer o login")}}
                             >
                                <Text style={styles.textButton}>Entrar</Text>
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
                            onPress={this.openTelaCadastroUsuario}
                            style={styles.containerCriaConta}>
                            <Text style={styles.textCriaConta}>Não tem cadastro? clique aqui</Text>
                        </TouchableOpacity>

                    </View>


                </View>

              
            </BodyLogin>
        );
    }
}


const styles = StyleSheet.create({
    
    container:{
        //borderWidth:1,
        flex:1,
        marginTop:height * .08,
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


export const LoginScreenStack = createStackNavigator(
    {
        LoginScreen,
        CadastroUsuario,
        RecuperaSenhaScreen,
      
        
        
    },
    {
        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        mode:"card",
        //transitionSpec: config,
        

        navigationOptions:{
            drawerLabel: "Login",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        }
      
    }
);